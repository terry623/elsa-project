import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import VirtualToReal from '../Content/VirtualToReal';

import Abstract from './Abstract';
import Awarding from './Awarding';
import Conclusion from './Conclusion';
import ExperimentalResults from './ExperimentalResults';
import NextProject from './NextProject';
import ProposedMethodology from './ProposedMethodology';
import SystemStructure from './SystemStructure';
import Topic from './Topic';
import VideoOverview from './VideoOverview';

const eachBlockTag = [
  'topic',
  'systemStructure',
  'abstract',
  'proposedMethodology',
  'experimentalResults',
  'awarding',
  'videoOverview',
  'conclusion',
  'nextProject',
];

const projectNameMap = {
  'Virtual-to-Real': VirtualToReal,
};

class SingleProjectPage extends Component {
  render() {
    const { name } = this.props;
    const content = projectNameMap[name];

    return (
      <ReactFullpage
        licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
        anchors={eachBlockTag}
        render={({ state, fullpageApi }) => {
          console.log('render prop change', state);
          console.log({ fullpageApi });

          return (
            <ReactFullpage.Wrapper>
              <Topic content={content.topic} />
              <SystemStructure content={content.systemStructure} />
              <Abstract content={content.abstract} />
              <ProposedMethodology />
              <ExperimentalResults />
              <Awarding />
              <VideoOverview />
              <Conclusion />
              <NextProject />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  }
}

SingleProjectPage.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SingleProjectPage;
