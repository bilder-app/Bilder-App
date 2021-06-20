import React from "react";
import { View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

function HorizontalItemCardSkeleton() {
  return (
    <SkeletonPlaceholder>
      <View
        style={{
          width: "100%",
          height: 110,
          padding: 20,
          flexDirection: "row"
        }}
      >
        <View style={{ width: 90, height: 90, borderRadius: 25 }} />

        <View
          style={{
            marginLeft: 20,
            flexGrow: 1,
            height: "100%",
            flexDirection: "column"
          }}
        >
          <View style={{ width: "80%", height: 20 }} />
          <View style={{ width: 80, marginTop: 8, height: 25 }} />
          <View
            style={{
              height: "100%",
              width: "100%",
              flexDirection: "row",
              marginTop: 8,
              flexGrow: 1
            }}
          >
            <View style={{ width: 80, height: 25, borderRadius: 25 }} />
            <View
              style={{
                width: 120,
                marginLeft: 30,
                height: 25,
                borderRadius: 25
              }}
            />
          </View>
        </View>
      </View>
    </SkeletonPlaceholder>
  );
}

export default HorizontalItemCardSkeleton;
