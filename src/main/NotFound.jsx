import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // hele schermhoogte
        backgroundColor: '#f0f2f5', // lichte achtergrond
        flexDirection: 'column',
      }}
    >
      <Result
        status="404"
        title={<span style={{ fontSize: '120px' }}>404</span>} // groter nummer
        subTitle={
          <span style={{ fontSize: '24px' }}>
            Sorry, de pagina die je zoekt bestaat niet.
          </span>
        }
        extra={
          <Link to="/">
            <Button type="primary" size="large">
              Ga terug naar Home
            </Button>
          </Link>
        }
      />
    </div>
  );
}