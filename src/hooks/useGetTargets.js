import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTargets, getTopics } from 'actions/targetActions';

const useGetTargets = () => {
  const dispatch = useDispatch();
  const targetsRequest = useCallback(() => dispatch(getTargets()), [dispatch]);
  const topicsRequest = useCallback(() => dispatch(getTopics()), [dispatch]);

  const { targets, topics } = useSelector(({ targets: { targets, topics } }) => ({
    targets,
    topics,
  }));

  useEffect(() => {
    targetsRequest();
    topicsRequest();
  }, [targetsRequest, topicsRequest]);

  return { targets, topics, targetsRequest };
};

export default useGetTargets;
