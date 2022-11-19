import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  background: #ffffff;
  width: 480px;
  border-radius: 8px;
  padding: 32px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }

    button {
      line-height: 0;
      border: none;
      background: transparent;
    }
  }

  div.status-container {
    margin-top: 32px;

    > strong {
      font-weight: 500;
      font-size: 14px;
      opacity: 0.8;
    }

    > div {
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
    font-weight: 500;
    font-size: 14px;
    opacity: 0.8;
  }

  div.order-items {
    margin-top: 16px;

    .item {
      display: flex;

      & + .item {
        margin-top: 16px;
      }

      img {
        border-radius: 6px;
      }

      .quantity {
        font-size: 14px;
        color: #666666;
        display: block;
        min-width: 20px;
        margin-left: 12px;
      }

      .product-details {
        margin-left: 4px;

        strong {
          display: block;
          margin-bottom: 4px;
        }

        span {
          font-size: 14px;
          color: #666666;
        }
      }
    }
  }

  div.order-total {
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-weight: 500;
      font-size: 14px;
      opacity: 0.8;
    }
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  button {
    &.primary {
      background: #333333;
      border-radius: 48px;
      color: #ffffff;
      border: none;
      padding: 12px 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    &.secondary {
      margin-top: 12px;
      font-weight: bold;
      border: none;
      background: transparent;
      color: #d73035;
    }
  }
`;
