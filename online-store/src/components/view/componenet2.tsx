import React from 'react';
import * as myType from '../../interfase';

export class Products extends React.Component<myType.IProducts> {
  render (): JSX.Element {
    return (<div>
              <h1>Привет, {this.props.products[1].title }</h1>
              <h2>{this.props.products[1].category }</h2>
            </div>
    );
  }
}
