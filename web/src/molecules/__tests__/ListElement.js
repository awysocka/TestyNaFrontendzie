import React from 'react';
import { screen, render } from '@testing-library/react';
import user from '@testing-library/user-event';
import ListElement from '../ListElement';

describe('<ListElement />', () => {

  it('should show the product data', () => {
    const onRemoveMock = jest.fn();
    const onAddMock = jest.fn();
    const product = {
      id: '1',
      name: 'Buty',
      price: 1000,
      quantity: 2,
    };

    render(<ListElement product={product} onRemove={onRemoveMock} onAdd={onAddMock} />);
    const productName = screen.getByText(product.name);
    expect(productName).toBeDefined();
    const productPrice = screen.getByText('10zł');
    expect(productPrice).toBeDefined();
    const productQuantity = screen.getByText('2');
    expect(productQuantity).toBeDefined();
    const totalPrice = screen.getByText('20zł');
    expect(totalPrice).toBeDefined();
  });

  it('should make ability for user to click on add button', () => {
    const onRemoveMock = jest.fn();
    const onAddMock = jest.fn();
    const product = {
      id: '1',
      name: 'Buty',
      price: 1000,
      quantity: 2,
    };

    render(<ListElement product={product} onRemove={onRemoveMock} onAdd={onAddMock} />);
    const addButton = screen.getByText('+1');
    expect(addButton).toBeDefined();

    user.click(addButton);

    expect(onAddMock).toBeCalled();
    expect(onAddMock).toBeCalledTimes(1);
  });

  it('should make ability for user to click on remove button', () => {
    const onRemoveMock = jest.fn();
    const onAddMock = jest.fn();
    const product = {
      id: '1',
      name: 'Buty',
      price: 1000,
      quantity: 2,
    };

    render(<ListElement product={product} onRemove={onRemoveMock} onAdd={onAddMock} />);
    const removeButton = screen.getByText('-1');
    expect(removeButton).toBeDefined();

    user.click(removeButton);

    expect(onRemoveMock).toBeCalled();
    expect(onRemoveMock).toBeCalledTimes(1);
  });
});
