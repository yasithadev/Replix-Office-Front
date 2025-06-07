import React from 'react';
//import './Button.css'; // Import your CSS file
import ButtonStyles from './button.module.css';

const Button=(props) =>{
  return (
    <button className={ButtonStyles.button}>
      {props.lable}
    </button>
  );
}

export default Button;
/*
<!DOCTYPE html>
<html>
<head>
<style>
.button {
  background-color: #04AA6D;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.button:hover {
            background-color: #026943;
        }
.button:active {
            background-color: #22e09a;
}
</style>
</head>
<body>

<a href="#" class="button">Link Button</a>
<button class="button">Button</button>

</body>
</html>
*/

