import React from 'react';
import {withRouter} from 'react-router-dom';
import Button from 'src/client/components/Common/Button';
import styles from './style.scss';
import {HOME_PAGE, TOURNAMENT_PAGE, TASK_TRAIN_PAGE} from 'common/constants/activePageNames';

class AdminButtonPanel extends React.Component {
  constructor(props) {
    super(props);
  }


  handleClick = (getPathFunction) => {
    return () => {
      const path = getPathFunction();
      if (this.props.location.pathname !== path) {
        this.props.history.push(path);
      }
    };
  };

  buttonRouteMap = {
    newTournament: {
      getPath: () => {
        return this.props.location.pathname;
      },
      buttonName: 'New Tournament'
    },
    editTournament: {
      getPath: () => {
        return this.props.location.pathname + '/edit_tournament';
      },
      buttonName: 'Edit Tournament'
    },
    newTask: {
      getPath: () => {
        return this.props.location.pathname + '/new_task';
      },
      buttonName: 'Add New Task'
    },
    editTask: {
      getPath: () => {
        return this.props.location.pathname.replace('train', 'edit');
      },
      buttonName: 'Edit Task'
    }
  };

  pageNameComponentMap = {
    [HOME_PAGE]: <Button type='submit'
      mod='success'
      onClick={this.handleClick(this.buttonRouteMap.newTournament.getPath)}>
      {this.buttonRouteMap.newTournament.buttonName}
    </Button>,
    [TOURNAMENT_PAGE]: [
      <Button type='submit'
        key={'editTournamentButton'}
        onClick={this.handleClick(this.buttonRouteMap.editTournament.getPath)}>
        {this.buttonRouteMap.editTournament.buttonName}
      </Button>,
      <Button type='submit'
        mod='success'
        key={'addNewTaskButton'}
        onClick={this.handleClick(this.buttonRouteMap.newTask.getPath)}>
        {this.buttonRouteMap.newTask.buttonName}
      </Button>
    ],
    [TASK_TRAIN_PAGE]: <Button type='submit'
      onClick={this.handleClick(this.buttonRouteMap.editTask.getPath)}>
      {this.buttonRouteMap.editTask.buttonName}
    </Button>
  };

  getComponentByActivePageName = (activePageName) => (
    this.pageNameComponentMap[activePageName]
  );


  render() {
    return (
      <div className={styles.buttonGroup}>
        {this.getComponentByActivePageName(this.props.activePageName)}
      </div>
    );
  }
}

export default withRouter(AdminButtonPanel);
