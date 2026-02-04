-- Athlete Career Quest Database Schema
-- Migration: 001-initial-schema

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255),
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    is_admin BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);

-- Question categories
CREATE TABLE question_categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(50) NOT NULL UNIQUE,
    display_name VARCHAR(100) NOT NULL,
    description TEXT,
    weight DECIMAL(3,2) DEFAULT 1.0,
    sort_order INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_categories_sort ON question_categories(sort_order);

-- Questions
CREATE TABLE questions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category_id UUID NOT NULL REFERENCES question_categories(id) ON DELETE CASCADE,
    question_text TEXT NOT NULL,
    question_type VARCHAR(50) NOT NULL CHECK (question_type IN ('likert', 'multiple_choice', 'ranking', 'short_text', 'scenario')),
    options JSONB,
    scoring_weights JSONB NOT NULL,
    sort_order INTEGER NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_questions_category ON questions(category_id);
CREATE INDEX idx_questions_sort ON questions(category_id, sort_order);
CREATE INDEX idx_questions_active ON questions(is_active);

-- Career paths
CREATE TABLE career_paths (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(200) NOT NULL,
    category VARCHAR(100) NOT NULL,
    description TEXT,
    typical_majors JSONB,
    grad_school_recommended BOOLEAN DEFAULT FALSE,
    internship_importance INTEGER CHECK (internship_importance BETWEEN 1 AND 5),
    salary_range JSONB,
    growth_outlook VARCHAR(50),
    required_dimensions JSONB,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_careers_category ON career_paths(category);
CREATE INDEX idx_careers_active ON career_paths(is_active);

-- User responses
CREATE TABLE user_responses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    question_id UUID NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
    response_value JSONB NOT NULL,
    session_id UUID NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_responses_user ON user_responses(user_id);
CREATE INDEX idx_responses_session ON user_responses(session_id);
CREATE INDEX idx_responses_question ON user_responses(question_id);

-- User results
CREATE TABLE user_results (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    session_id UUID NOT NULL UNIQUE,
    category_scores JSONB NOT NULL,
    dimension_scores JSONB NOT NULL,
    career_scores JSONB NOT NULL,
    recommendations JSONB NOT NULL,
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_results_user ON user_results(user_id);
CREATE INDEX idx_results_session ON user_results(session_id);

-- Admin configuration
CREATE TABLE admin_config (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    config_key VARCHAR(100) UNIQUE NOT NULL,
    config_value JSONB NOT NULL,
    description TEXT,
    updated_by UUID REFERENCES users(id),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_config_key ON admin_config(config_key);

-- Sessions table for tracking questionnaire progress
CREATE TABLE questionnaire_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    current_question_index INTEGER DEFAULT 0,
    total_questions INTEGER,
    started_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP WITH TIME ZONE,
    is_complete BOOLEAN DEFAULT FALSE
);

CREATE INDEX idx_sessions_user ON questionnaire_sessions(user_id);
CREATE INDEX idx_sessions_complete ON questionnaire_sessions(is_complete);

-- Trigger to update updated_at timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON users
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_questions_updated_at
    BEFORE UPDATE ON questions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_career_paths_updated_at
    BEFORE UPDATE ON career_paths
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_admin_config_updated_at
    BEFORE UPDATE ON admin_config
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Insert default admin configuration
INSERT INTO admin_config (config_key, config_value, description) VALUES
('scoring_weights', '{"interests": 0.25, "skills": 0.30, "financial": 0.20, "timeline": 0.25}', 'Category weights for scoring algorithm'),
('dimension_weights', '{"people": 1.0, "data": 1.0, "creative": 1.0, "analytical": 1.0, "leadership": 1.2, "communication": 1.1, "technical": 1.0, "physical": 0.8}', 'Individual dimension weights'),
('recommendation_thresholds', '{"high_confidence": 0.75, "medium_confidence": 0.50, "minimum_match": 0.30}', 'Thresholds for recommendation confidence levels');

-- Insert question categories
INSERT INTO question_categories (name, display_name, description, weight, sort_order) VALUES
('background', 'Background', 'Basic information about your current situation', 0.10, 1),
('interests', 'Interests & Passions', 'Discover what activities and subjects energize you', 0.25, 2),
('skills', 'Skills & Strengths', 'Assess your natural abilities and developed skills', 0.30, 3),
('financial', 'Financial & Lifestyle Goals', 'Understand your financial priorities and lifestyle preferences', 0.20, 4),
('timeline', 'Timeline & Career Goals', 'Explore your timeline preferences and long-term vision', 0.15, 5);
