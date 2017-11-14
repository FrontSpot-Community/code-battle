import React from 'react';
import {
    Grid,
    Row,
    Col,
    Tabs,
    Tab
} from 'react-bootstrap';
import TaskDescription from '../components/TaskDescription/TaskDescription';
import TaskOutput from '../components/TaskOutput/TaskOutput';
import CodeEditor from '../components/CodeEditor/CodeEditor';

export default class TaskContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        task: {
            description: 'Task Description',
            output: 'Task Output'
        },
        codeEditor: {
            value: 'function reverseWords(str){\n' +
            '  return str; // reverse those words\n' +
            '}',
            mode: 'JavaScript',
            theme: 'Twilight',
            fontSize: 16,
            highlightActiveLine: true
        }
    };
  }

  render() {
      return (
            <Grid fluid={true}>
                <Row>
                    <Col md={5}>
                        <h1>Task : {this.props.match.params.taskId}</h1>
                        <Tabs id={'taskDescriptionTabs'} defaultActiveKey={1}>
                            <Tab eventKey={1} title={'Description'}>
                                <TaskDescription
                                    description={this.state.description}
                                />
                            </Tab>
                            <Tab eventKey={2} title={'Output'}>
                                <TaskOutput
                                    output={this.state.output}
                                />
                            </Tab>
                        </Tabs>
                    </Col>
                    <Col md={7}>
                        <CodeEditor
                            value={this.state.codeEditor.value}
                            mode={this.state.codeEditor.mode}
                            theme={this.state.codeEditor.theme}
                            fontSize={this.state.codeEditor.fontSize}
                            highlightActiveLine={
                                this.state.codeEditor.highlightActiveLine
                            }
                        />
                    </Col>
                </Row>
            </Grid>
      );
  }
}
