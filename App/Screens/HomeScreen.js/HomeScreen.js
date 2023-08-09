//import liraries
import axios from 'axios';
import React, {Component, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {RenderFooter, RenderSeparator} from '../../Components';
import RenderList from '../../Components/RenderList';
import BackButton from '../../Components/BackButton';
import {useDispatch, useSelector} from 'react-redux';
import {userLogout} from '../../../Store/Actions/UserActions';
import NavigationService from '../../Services/NavigationServices';
import {clearStorage} from '../../Utils/Storage';

// create a component
const HomeScreen = () => {
  const [loading, setLoading] = useState('false');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [allData, setAllData] = useState([]);
  const [error, setError] = useState('');
  const userDetail = useSelector(state => state.user.userData);
  const dispatch = useDispatch();
  const logout = () => {
    clearStorage();
    NavigationService.resetNavigator('Login');
    dispatch(userLogout());
  };
  const page = useRef(1);
  useEffect(() => {
    fetchPage(1);
  }, []);
  const fetchPage = page => {
    setLoading(true);
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        let listData = allData;
        let data = listData.concat(res.data);
        setLoading(true);
        setAllData(data);
      })
      .catch(error => {
        setError('Something just went wrong');
        setLoading(false);
      });
  };
  const handleMore = currentPage => {
    if (!loading) {
      page.current = currentPage + 1;
      fetchPage(page.current); // method for API call
    }
  };
  const refresh = () => {
    page.current = 1;
    setAllData([]);
    fetchPage(1);
  };
  if (loading && page === 1) {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
        }}>
        <ActivityIndicator style={{color: '#000000'}} size={'large'} />
      </View>
    );
  }
  return (
    <View style={{width: '100%', height: '100%'}}>
      <FlatList
        data={allData}
        // extraData={allData}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={() => {
              refresh();
            }}
          />
        }
        renderItem={({item}) => {
          return <RenderList item={item} />;
        }}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <RenderSeparator />}
        ListFooterComponent={() => <RenderFooter loading={loading} />}
        ListHeaderComponent={() => {
          return (
            <View style={{justifyContent: 'center'}}>
              <Text
                style={{fontSize: 20, color: '#000000', textAlign: 'center'}}>
                {userDetail?.username}
              </Text>

              <View
                style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                {loading ? (
                  <BackButton title={'Refresh'} onPress={() => refresh()} />
                ) : (
                  <ActivityIndicator size={'small'} color={'#000000'} />
                )}

                <BackButton title={'Logout'} onPress={() => logout()} />
              </View>
            </View>
          );
        }}
        onEndReachedThreshold={0.4}
        removeClippedSubviews={true}
        maxToRenderPerBatch={60}
        windowSize={41}
        onEndReached={() => handleMore(page.current)}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default HomeScreen;
