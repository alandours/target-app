import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { View, FlatList } from 'react-native';
import { func } from 'prop-types';

import Topic from 'components/Topic';

import styles from './styles';

const Topics = ({ selectTopic }) => {
  const topics = useSelector(({ targets: { topics } }) => topics);
  const data = useMemo(() => Object.values(topics), [topics]);

  return (
    <View style={styles.topics}>
      <FlatList
        style={styles.topicList}
        data={data}
        renderItem={({ item }) => <Topic topic={item} handlePress={() => selectTopic(item)} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

Topics.propTypes = {
  selectTopic: func.isRequired,
};

export default Topics;
