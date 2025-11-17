/*
  # Create leads table for TradeLeads Digital

  1. New Tables
    - `leads`
      - `id` (uuid, primary key) - Unique identifier for each lead
      - `business_name` (text) - Name of the trade business
      - `contact_name` (text) - Name of the contact person
      - `phone` (text) - Contact phone number
      - `email` (text) - Contact email address
      - `trade_type` (text) - Type of trade (plumber, electrician, etc.)
      - `service_area` (text) - Geographic service area
      - `status` (text) - Lead status (new, contacted, qualified, converted)
      - `created_at` (timestamptz) - Timestamp when lead was created
      - `updated_at` (timestamptz) - Timestamp of last update

  2. Security
    - Enable RLS on `leads` table
    - Add policy for service role to manage all leads
    - Public can insert leads (for form submissions)
    
  3. Important Notes
    - This table stores all lead submissions from the contact form
    - Status field helps track lead progression through the sales funnel
    - Email and phone are stored for follow-up communications
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_name text NOT NULL,
  contact_name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  trade_type text NOT NULL,
  service_area text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert leads"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Service role can manage all leads"
  ON leads
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);