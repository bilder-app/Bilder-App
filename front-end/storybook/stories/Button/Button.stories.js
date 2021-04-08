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
    <Button onPress={action('continue')}>
      <Text>{text('Large', 'Continuar')}</Text>
    </Button>
  ))
  .add('medium secondary', () => (
    <Button onPress={action('continue')}  type='medium' color='secondary'>
      <Text>{text('Medium', 'Agregar más productos')}</Text>
    </Button>
  ))
  .add('small success outline', () => (
    <Button onPress={action('continue')} type='small' color='success' outline>
      <Text>{text('Small', 'Agregar al carrito')}</Text>
    </Button>
  ))
