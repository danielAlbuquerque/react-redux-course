import React from 'react';
import { connect } from 'react-redux';
import { ListView, Text } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends React.Component {

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  rendeRow(row) {
    return <ListItem row={row} />
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.rendeRow}
      />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries }
}

export default connect(mapStateToProps)(LibraryList);
