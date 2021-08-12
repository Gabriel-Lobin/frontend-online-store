import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaCreditCard, FaBarcode } from 'react-icons/fa';

import PaymentMethodsRadio from './PaymentMethodsRadio';

const states = [
  { short: 'AC', long: 'Acre' },
  { short: 'AL', long: 'Alagoas' },
  { short: 'AP', long: 'Amapá' },
  { short: 'AM', long: 'Amazonas' },
  { short: 'BA', long: 'Bahia' },
  { short: 'CE', long: 'Ceará' },
  { short: 'DF', long: 'Distrito Federal' },
  { short: 'ES', long: 'Espírito Santo' },
  { short: 'GO', long: 'Goiás' },
  { short: 'MA', long: 'Maranhão' },
  { short: 'MT', long: 'Mato Grosso' },
  { short: 'MS', long: 'Mato Grosso do Sul' },
  { short: 'MG', long: 'Minas Gerais' },
  { short: 'PA', long: 'Pará' },
  { short: 'PB', long: 'Paraíba' },
  { short: 'PR', long: 'Paraná' },
  { short: 'PE', long: 'Pernambuco' },
  { short: 'PI', long: 'Piauí' },
  { short: 'RJ', long: 'Rio de Janeiro' },
  { short: 'RN', long: 'Rio Grande do Norte' },
  { short: 'RS', long: 'Rio Grande do Sul' },
  { short: 'RO', long: 'Rondônia' },
  { short: 'RR', long: 'Roraima' },
  { short: 'SC', long: 'Santa Catarina' },
  { short: 'SP', long: 'São Paulo' },
  { short: 'SE', long: 'Sergipe' },
  { short: 'TO', long: 'Tocantins' },
];

class Checkout extends Component {
  render() {
    const cartItems = JSON.parse(localStorage.getItem('card'));
    return (
      <div className="checkout">
        <Link to="/">🏠</Link>

        <main className="container">
          <section>
            <h2>Revise seus Produtos</h2>
            <ol>
              {cartItems.map((item) => (
                <li key={ item.id }>
                  <h3>{item.title}</h3>
                  <img src={ item.thumbnail } alt="produto" />
                  <h3>
                    <strong>{item.price}</strong>
                  </h3>
                </li>
              ))}
            </ol>
            <h2>
              Total a pagar:
              {' '}
              {`R$ ${cartItems
                .reduce((total, item) => total + item.price, 0)
                .toFixed(2)}`}
            </h2>
          </section>
          <section>
            <h2>Informações do Comprador</h2>
            <input
              data-testid="checkout-fullname"
              placeholder="Nome Completo"
              name="fullName"
              type="text"
            />
            <input
              data-testid="checkout-cpf"
              placeholder="CPF"
              name="CPF"
              type="text"
            />
            <input
              data-testid="checkout-email"
              placeholder="Email"
              name="email"
              type="email"
            />
            <input
              data-testid="checkout-phone"
              placeholder="Telefone"
              name="phone"
              type="text"
            />
            <input
              data-testid="checkout-cep"
              placeholder="CEP"
              name="postalCode"
              type="text"
            />
            <input
              data-testid="checkout-address"
              placeholder="Endereço"
              name="address"
              type="text"
            />
            <input
              placeholder="Complemento"
              name="complement"
              type="text"
            />
            <input
              placeholder="Número"
              name="number"
              type="text"
            />
            <input
              data-testid=""
              placeholder="Cidade"
              name="city"
              type="text"
            />
            <select placeholder="Estado" name="state">
              <option value="" selected>
                Estado
              </option>
              {states.map((state, index) => (
                <option key={ index } value={ state.short }>
                  {state.long}
                </option>
              ))}
            </select>
          </section>
          <section>
            <h2>Métodos de Pagamento</h2>

            <PaymentMethodsRadio id="boleto" name="payment" title="Boleto">
              <FaBarcode />
            </PaymentMethodsRadio>

            <PaymentMethodsRadio
              id="mastercard"
              name="payment"
              title="mastercard"
            >
              <FaCreditCard />
            </PaymentMethodsRadio>

            <PaymentMethodsRadio id="visa" name="payment" title="visa">
              <FaCreditCard />
            </PaymentMethodsRadio>

            <PaymentMethodsRadio id="elo" name="payment" title="elo">
              <FaCreditCard />
            </PaymentMethodsRadio>
          </section>
          <button type="button">Comprar</button>
        </main>
      </div>
    );
  }
}

export default Checkout;
