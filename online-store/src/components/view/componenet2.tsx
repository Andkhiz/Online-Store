import React from 'react';
import * as myType from '../../interfase';

export class Products extends React.Component<myType.IProducts> {
  render (): JSX.Element {
    const params = window.location.href.indexOf('?') > 0 ? window.location.href.slice(window.location.href.indexOf('?') + 1) : '';
    return (<div>
              <h1>Привет, {this.props.products[10].title }</h1>
              <h2>{this.props.products[10].category }</h2>
              <h3>Параметры: {params}</h3>
            </div>
    );
  }
}
