'use client';

import { Button, Card, Space, Typography } from 'antd';

const { Title } = Typography;

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Welcome to Next.js with Ant Design</Title>
        <Card title="Ant Design Components">
          <Space>
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="dashed">Dashed Button</Button>
          </Space>
        </Card>
      </Space>
    </main>
  );
}
