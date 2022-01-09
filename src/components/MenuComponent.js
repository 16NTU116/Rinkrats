import React, { Component } from "react";
import { TouchableOpacity, Text, View, Dimensions, Image } from "react-native";

export default class MenuComponent extends Component {
     constructor(props) {
          super(props);
          this.state = {
               title: this.props.title,
               navigateTo: this.props.screenName,
               iconName: this.props.iconName,
          };
     }

     render() {
          return (
               <View style={{ paddingTop: 12, paddingHorizontal: 20 }}>
                    <TouchableOpacity
                         style={{
                              borderRadius: 4,
                              paddingVertical: 16,
                              marginTop: 8,
                              borderWidth: 1,
                              borderColor: "#8F959D",
                              alignItems: "center",
                              flexDirection: "row",
                              paddingHorizontal: 12,
                         }}
                         onPress={() => {
                              if (this.props.onPress) {
                                   this.props.onPress();
                              } else {
                                   this.props.navigation.navigate(
                                        this.state.navigateTo
                                   );
                              }
                         }}
                    >
                         <Image source={this.state.iconName} />
                         <Text
                              style={{
                                   fontWeight: "700",
                                   fontSize: 12,
                                   marginLeft: 6,
                                   color: "white",
                              }}
                         >
                              {this.state.title}
                         </Text>
                    </TouchableOpacity>
               </View>
          );
     }
}
