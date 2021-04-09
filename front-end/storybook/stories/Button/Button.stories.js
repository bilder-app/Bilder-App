import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Button from '.';
import CenterView from '../CenterView';

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <Button onPress={action('continue')} children={text('Large', 'Continuar')} />
  ))
  .add('medium secondary', () => (
    <Button onPress={action('continue')} type='medium' color='secondary' children={text('Medium', 'Agregar más productos')} />
  ))
  .add('small success outline', () => (
    <Button onPress={action('continue')} type='small' color='success' outline children={text('Small', 'Agregar al carrito')} />
  ))
