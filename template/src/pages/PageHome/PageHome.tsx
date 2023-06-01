import React, { Component } from 'react';

import Button from './../../Component/Button/button';
import React, { Component } from './../../Component/card/card';




export default class pageHome extends Component {

    constructor(props, context) {

        super(props, context);

        this.state = {

            source: null

        };

    }

    handclick() {
        console.log("appuyer");

    }

    render() {

        return (


            <div><h1>mon template personnel</h1><p>ipsum</p></div>
            <Button className="" onClick={()=>handclick} variant="dark"itemMess="appuyer"/>

      <Card className="CLASS" variant="dark" src="IMG " item1="3 ITEM" item2="2 ITEM" item3=" PREMIER ITEM" title=" EXEMPLE DE CARD" textdesc="description et text" />


        );
    }

}
