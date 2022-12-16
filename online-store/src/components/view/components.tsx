import React from 'react';
import * as myType from '../../interfase';

export class Products extends React.Component<myType.IProducts> {
  render (): JSX.Element {
    const query = window.location.href;
    return (<div>
              <h1>Привет, {this.props.products[0].title }</h1>
              <h2>{this.props.products[0].category }</h2>
              <h3>{query}</h3>
            </div>
    );
  }
}
