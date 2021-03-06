import "../_mockLocation";
import React, {useContext,useCallback} from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import {Context as LocationContext} from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = ({ isFocused }) => {
  const {state, addLocation} = useContext(LocationContext);
  const callback = useCallback((location) => {
    addLocation(location, state.recording)
  }, [state.recording]);
  const [err] = useLocation(isFocused, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2> Create Track</Text>
      <Map />
      {err ? <Text>{err}</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
