import React from 'react';
import { useSelector } from 'react-redux';
import { View, FlatList } from 'react-native';
import { func } from 'prop-types';

import Topic from 'components/Topic';

import styles from './styles';

const Topics = ({ selectTopic }) => {
  const topics = useSelector(({ targets: { topics } }) => topics);

  return (
    <View style={styles.topics}>
      <FlatList
        style={styles.topicList}
        data={Object.values(topics)}
        renderItem={({ item }) => <Topic topic={item} handlePress={selectTopic} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

Topics.propTypes = {
  selectTopic: func.isRequired,
};

export default Topics;
