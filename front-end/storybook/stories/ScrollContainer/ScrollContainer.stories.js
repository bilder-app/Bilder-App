import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import ScrollContainer from "../../../atomic Design/atoms/ScrollContainer/ScrollContainer.jsx";
import { View } from "react-native";
import CenterView from "../CenterView";
import Text from "../../../atomic Design/atoms/Text/Text.jsx";

storiesOf("ScrollContainer", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("vertical", () => (
    <View style={{height: 500, width: 350}}>
      <ScrollContainer >
        {[1,2,3,4,5].map((item) => {
          return(
            <View style={{height: 120, width: '100%', backgroundColor: 'white', marginVertical: 10}} key={item}>
              <Text>Sample Text {item}</Text>
            </View>
          )
        })}
      </ScrollContainer>
    </View>
  ))
  .add("horizontal", () => (
    <View style={{height: 250, width: '100%', }}>
      <ScrollContainer position='horizontal'>
        {[1,2,3,4,5].map((item) => {
          return(
            <View style={{height: '100%', width: 120, backgroundColor: 'white', marginHorizontal: 10}} key={item}>
              <Text>Sample Text {item}</Text>
            </View>
          )
        })}
      </ScrollContainer>
    </View>
  ));
