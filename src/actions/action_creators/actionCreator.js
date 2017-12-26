const postfix = {
  SUCCESS: '_SUCCESS',
  FAILED: '_FAILED'
};

export function createFetchActions(name) {
  return [
    `${name}`,
    `${name}${postfix.SUCCESS}`,
    `${name}${postfix.FAILED}`
  ];
}

export class Actions {
  constructor(actionName='UNKNOWN') {
    this.actionName = actionName;
  }

  request = (data) => {
    return {
      type: `${this.actionName}`,
      payload: data
    };
  };

  success = (payload) => {
    return {
      type: `${this.actionName}${postfix.SUCCESS}`,
      payload
    };
  }

  failed = (error) => {
    return {
      type: `${this.actionName}${postfix.FAILED}`,
      error
    };
  }
}

