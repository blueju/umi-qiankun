// 实现方式一
// componentWillMount
import { MicroApp } from 'umi';
import React from 'react';

class MicroAppLayout extends React.Component {
  state = {
    name: '',
  };

  componentWillMount() {
    const name = location.pathname.slice(1);
    this.setState({
      name,
    });
  }

  render() {
    return <MicroApp name={this.state.name} />;
  }
}

export default MicroAppLayout;

// 实现方式二
// constructor
// import { MicroApp } from 'umi';
// import React from 'react';

// let name = '';

// class MicroAppLayout extends React.Component {
//   constructor(props) {
//     super(props);
//     name = location.pathname.slice(1);
//   }

//   render() {
//     return <MicroApp name={name} />;
//   }
// }

// export default MicroAppLayout;

// 实现方式三
// 函数组件
// import { MicroApp } from 'umi';
// import React from 'react';

// function MicroAppLayout() {
//   const name = location.pathname.slice(1);
//   return <MicroApp name={name} />;
// }

// export default MicroAppLayout;
