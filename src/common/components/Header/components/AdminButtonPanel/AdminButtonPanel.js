import React from 'react';
import Button from 'src/client/components/Common/Button';
import styles from './style.scss';
import {HOME_PAGE, TOURNAMENT_PAGE, TASK_TRAIN_PAGE} from 'common/constants/activePageNames';

class AdminButtonPanel extends React.Component {
  constructor(props) {
    super(props);
  }


  handleClick = () => {
  };

  buttonRouteMap = {
    newTournament: {
      path: '',
      buttonName: 'New Tournament'
    },
    editTournament: {
      path: '',
      buttonName: 'Edit Tournament'
    },
    newTask: {
      path: '',
      buttonName: 'Add New Task'
    },
    editTask: {
      path: '',
      buttonName: 'Edit Task'
    }
  };

  pageNameComponentMap = {
    [HOME_PAGE]: <Button type='submit'
      mod='success'
      onClick={this.handleClick(this.buttonRouteMap.newTournament.path)}>
      {this.buttonRouteMap.newTournament.buttonName}
    </Button>,
    [TOURNAMENT_PAGE]: [
      <Button type='submit'
        key={'editTournamentButton'}
        onClick={this.handleClick(this.buttonRouteMap.editTournament.path)}>
        {this.buttonRouteMap.editTournament.buttonName}
      </Button>,
      <Button type='submit'
        mod='success'
        key={'addNewTaskButton'}
        onClick={this.handleClick(this.buttonRouteMap.newTask.path)}>
        {this.buttonRouteMap.newTask.buttonName}
      </Button>
    ],
    [TASK_TRAIN_PAGE]: <Button type='submit'
      onClick={this.handleClick(this.buttonRouteMap.editTask.path)}>
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

export default AdminButtonPanel;
