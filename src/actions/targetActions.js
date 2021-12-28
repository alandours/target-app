import { createThunk } from '@rootstrap/redux-tools';
import targetService from 'services/targetService';

export const getTopics = createThunk('GET_TOPICS', async () => {
  const {
    data: { topics },
  } = await targetService.getTopics();

  const topicsById = topics.reduce((acc, { topic: { id, label, icon } }) => {
    const topicsAcc = acc;
    topicsAcc[id] = { id, label, icon };
    return topicsAcc;
  }, {});

  return topicsById;
});

export const getTargets = createThunk('GET_TARGETS', async () => {
  const {
    data: { targets },
  } = await targetService.getTargets();
  return targets;
});

export const createTarget = createThunk('CREATE_TARGET', async target => {
  const { data } = await targetService.createTarget(target);
  return data;
});

export const { success: topicsSuccess } = getTopics;
export const { success: targetsSuccess } = getTargets;
export const { success: createTargetSuccess } = createTarget;
