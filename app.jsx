import React, { useState } from 'react';
// For local testing (before publish), import from built ESM bundle:
import { NBadge, NToggle } from 'nkp';
// After publishing to npm, switch to:
// import { NBadge, NToggle } from 'nkp';

const Section = ({ title, children }) => (
  <div style={{ marginBottom: 32 }}>
    <h2 style={{ margin: '0 0 12px', fontSize: 18, fontWeight: 600 }}>{title}</h2>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 20,
        alignItems: 'start'
      }}
    >
      {children}
    </div>
  </div>
);

const Card = ({ title, children }) => (
  <div style={{
    background: '#fff',
    border: '1px solid #e5e7eb',
    borderRadius: 8,
    padding: 16,
    boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
    height: '100%'
  }}>
    <div style={{ fontSize: 12, fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', marginBottom: 10 }}>{title}</div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {children}
    </div>
  </div>
);

const Box = ({ w = 96, h = 48, bg = '#f3f4f6' }) => (
  <div style={{ width: w, height: h, background: bg, borderRadius: 6 }} />
);

export default function App() {
  const [controlled, setControlled] = useState(true);

  return (
    <div style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system', background: '#f5f5f5', minHeight: '100vh' }}>
      <div
        style={{
          maxWidth: 960,
          margin: '40px auto',
          padding: 24,
          background: '#ffffff',
          border: '1px solid #e5e7eb',
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(0,0,0,0.04)'
        }}
      >
        <h1 style={{ margin: 0, fontSize: 24, fontWeight: 700 }}>nkp – Component Showcase</h1>
        <p style={{ margin: '8px 0 24px', color: '#6b7280' }}>Visual test for NBadge and NToggle props and behaviors.</p>

        {/* NBadge Showcase */}
        <Section title="NBadge – basic types">
          <Card title="text">
            <NBadge content="Beta" type="text" backgroundColor="#2563eb" color="#fff">
              <Box />
            </NBadge>
          </Card>
          <Card title="number">
            <NBadge content={42} type="number" backgroundColor="#ef4444">
              <Box />
            </NBadge>
          </Card>
          <Card title="dot">
            <NBadge type="dot">
              <Box />
            </NBadge>
          </Card>
          <Card title="custom color + border (outline)">
            <NBadge content="Info" type="text" backgroundColor="transparent" borderColor="#16a34a" color="#16a34a">
              <Box />
            </NBadge>
          </Card>
        </Section>

        <Section title="NBadge – shapes & sizes">
          <Card title="shape: round">
            <NBadge content={8} type="number" shape="round" backgroundColor="#f59e0b">
              <Box />
            </NBadge>
          </Card>
          <Card title="shape: square">
            <NBadge content="SQ" type="text" shape="square" backgroundColor="#10b981">
              <Box />
            </NBadge>
          </Card>
          <Card title="shape: pill">
            <NBadge content="New" type="text" shape="pill" backgroundColor="#6366f1">
              <Box />
            </NBadge>
          </Card>
          <Card title="sizes: small/medium/large">
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <NBadge content="S" type="text" size="small" backgroundColor="#111827"><Box /></NBadge>
              <NBadge content="M" type="text" size="medium" backgroundColor="#111827"><Box /></NBadge>
              <NBadge content="L" type="text" size="large" backgroundColor="#111827"><Box /></NBadge>
            </div>
          </Card>
        </Section>

        <Section title="NBadge – position & offset, visibility">
          <Card title="positions">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
              <NBadge content="TL" type="text" position="top-left" backgroundColor="#0ea5e9"><Box /></NBadge>
              <NBadge content="TR" type="text" position="top-right" backgroundColor="#0ea5e9"><Box /></NBadge>
              <NBadge content="BL" type="text" position="bottom-left" backgroundColor="#0ea5e9"><Box /></NBadge>
              <NBadge content="BR" type="text" position="bottom-right" backgroundColor="#0ea5e9"><Box /></NBadge>
              <NBadge content="C" type="text" position="center" backgroundColor="#0ea5e9"><Box /></NBadge>
            </div>
          </Card>
          <Card title="offset (x: 8, y: -6)">
            <NBadge content="O" type="text" backgroundColor="#f97316" offset={{ x: 8, y: -6 }}>
              <Box />
            </NBadge>
          </Card>
          <Card title="visibility & zero">
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <NBadge content={0} type="number" showZero backgroundColor="#ef4444"><Box /></NBadge>
              <NBadge content={0} type="number" backgroundColor="#ef4444"><Box /></NBadge>
              <NBadge content={99} type="number" maxCount={9} backgroundColor="#ef4444"><Box /></NBadge>
              <NBadge content={5} type="number" invisible backgroundColor="#ef4444"><Box /></NBadge>
            </div>
          </Card>
        </Section>

        {/* NToggle Showcase */}
        <Section title="NToggle – basic">
          <Card title="uncontrolled (defaultChecked)">
            <NToggle defaultChecked onText="ON" offText="OFF" />
          </Card>
          <Card title="controlled (checked + onChange)">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <NToggle
                checked={controlled}
                onChange={(v) => setControlled(v)}
                onText="ON"
                offText="OFF"
              />
              <span style={{ color: '#374151', fontSize: 14 }}>state: {String(controlled)}</span>
            </div>
          </Card>
          <Card title="disabled">
            <NToggle disabled onText="ON" offText="OFF" />
          </Card>
        </Section>

        <Section title="NToggle – sizes, colors, labels">
          <Card title="sizes">
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <NToggle size="small" onText="ON" offText="OFF" />
              <NToggle size="medium" onText="ON" offText="OFF" />
              <NToggle size="large" onText="ON" offText="OFF" />
            </div>
          </Card>
          <Card title="colors">
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <NToggle onColor="#2563eb" offColor="#d1d5db" />
              <NToggle onColor="#16a34a" offColor="#d1d5db" />
              <NToggle onColor="#f59e0b" offColor="#d1d5db" />
            </div>
          </Card>
          <Card title="label left/right">
            <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
              <NToggle label="Power" labelPosition="left" defaultChecked />
              <NToggle label="Power" labelPosition="right" />
            </div>
          </Card>
        </Section>

        <Section title="NToggle – icons & knob shape">
          <Card title="icons (using emoji for simplicity)">
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <NToggle onIcon={<span>✅</span>} offIcon={<span>❌</span>} />
              <NToggle onIcon={<span>🌙</span>} offIcon={<span>☀️</span>} onColor="#1f2937" offColor="#f59e0b" />
            </div>
          </Card>
          <Card title="knob shape: round | square">
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <NToggle knobShape="round" />
              <NToggle knobShape="square" />
            </div>
          </Card>
          <Card title="animated: false">
            <NToggle animated={false} onText="ON" offText="OFF" />
          </Card>
        </Section>

      </div>
    </div>
  );
}


