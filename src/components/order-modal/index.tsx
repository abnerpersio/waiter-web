import { useEffect } from 'react';

import closeIcon from '../../assets/images/close-icon.svg';
import { ACTION_MAPPING, STATUS_MAPPING } from '../../shared/constants/status';
import { Order } from '../../types/order';
import { formatCurrency } from '../../utils/formatCurrency';
import { generateImagePath } from '../../utils/image';
import { LoadingSpinner } from '../icons/loading-spinner';
import { Actions, Container, OrderDetails, Overlay } from './styles';

type Props = {
  visible: boolean;
  order: Order | null;
  isUpdating: boolean;
  isCanceling: boolean;
  onClose: () => void;
  onUpdateOrderStatus: () => void;
  onCancelOrder: () => void;
};

export function OrderModal(props: Props) {
  const { visible, order, isCanceling, isUpdating, onClose, onUpdateOrderStatus, onCancelOrder } =
    props;

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!visible || !order) {
    return null;
  }

  const isLoading = isUpdating || isCanceling;

  const total = order.products
    .map(({ product, quantity }) => product.price * quantity)
    .reduce((acc, current) => acc + current, 0);

  return (
    <Overlay>
      <Container>
        <header>
          <strong>Mesa {order.table}</strong>

          <button type="button" onClick={onClose}>
            <img src={closeIcon} alt="Ícone de fechar" />
          </button>
        </header>

        <div className="status-container">
          <strong>Status do pedido</strong>

          <div>
            <span>{STATUS_MAPPING[order.status].icon}</span>
            <span>{STATUS_MAPPING[order.status].title}</span>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

          <div className="order-items">
            {order.products.map(({ _id, product, quantity }) => (
              <div className="item" key={_id}>
                <img
                  src={generateImagePath(product.imagePath)}
                  alt={product.name}
                  width="56"
                  height="28"
                />

                <span className="quantity">{quantity}x</span>
                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="order-total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>

          <Actions>
            {order.status !== 'DONE' && (
              <button
                type="button"
                className="primary"
                onClick={onUpdateOrderStatus}
                disabled={isLoading}
              >
                {isUpdating && <LoadingSpinner />}
                {!isUpdating && (
                  <>
                    <span>{ACTION_MAPPING[order.status].icon}</span>
                    <span>{ACTION_MAPPING[order.status].title}</span>
                  </>
                )}
              </button>
            )}

            <button
              type="button"
              className="secondary"
              onClick={onCancelOrder}
              disabled={isLoading}
            >
              {isCanceling && <LoadingSpinner />}
              {!isCanceling && <span>Cancelar pedido</span>}
            </button>
          </Actions>
        </OrderDetails>
      </Container>
    </Overlay>
  );
}
