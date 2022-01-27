import React, { Component, useEffect, useRef, useState } from "react";
import { View, Text, ScrollView, Dimensions, Image } from "react-native";
import { Button } from '@ui-kitten/components';

import GlobalStyles from "../../styles/GlobalStyles";

const styles = {
  container: {
    // minHeight: Dimensions.get("window").height,
  },
  navWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20
  }
}

const QuizEngine = (props: any) => {
  const [page, setPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(1);

  const [pageComponents, setPageComponents] = useState<any>([]);
  const [jsxPage, setJsxPage] = useState<any>(<></>);

  const scrollView: any = useRef(null);

  useEffect(() => {
    setPageComponents(props.pages);
  }, [props.pages])

  useEffect(() => {
    setMaxPage(pageComponents.length);
  }, [pageComponents]);

  useEffect(() => {
    const jsx: any = pageComponents[page - 1];
    setJsxPage(jsx)
  }, [page, pageComponents])

  //functions
  const navigatePage = (pgno: number) => {
    setPage(pgno);
    scrollView.current.scrollTo({ x: 0, y: 0 });
  }

  return (
    <ScrollView style={styles.container} ref={scrollView}>
      <View style={styles.navWrapper}>
        <Button size="small" disabled={page === 1} onPress={() => { navigatePage(page - 1) }}>Previous</Button>
        <Text>{"Page " + page}</Text>
        <Button size="small" disabled={page === maxPage} onPress={() => { navigatePage(page + 1) }} > Next</Button>
      </View>

      {jsxPage}
    </ScrollView >
  )
}
export default QuizEngine;