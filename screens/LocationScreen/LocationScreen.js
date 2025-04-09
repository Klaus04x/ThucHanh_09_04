import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'; // Import FontAwesome5
import styles from './styles';

const LocationScreen = ({ navigation }) => {
  const [zone, setZone] = useState('Banasee');
  const [area, setArea] = useState('');
  const [zoneModalVisible, setZoneModalVisible] = useState(false);
  const [areaModalVisible, setAreaModalVisible] = useState(false);

  const zones = ['Banasee', 'Zone 1', 'Zone 2'];
  const areas = ['Area 1', 'Area 2'];

  const handleSubmit = () => {
    console.log('Selected Zone:', zone);
    console.log('Selected Area:', area);
    navigation.navigate('Login');
  };

  const renderItem = ({ item, onPress }) => (
    <Pressable style={styles.dropdownItem} onPress={onPress}>
      <Text style={styles.dropdownItemText}>{item}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Icon name="map-marker-alt" size={70} color="#ff0000" style={styles.mapIcon} />
      <Text style={styles.title}>Select Your Location</Text>
      <Text style={styles.description}>
        Switch on your location to stay in tune with what’s happening in your area
      </Text>

      {/* Dropdown cho Your Zone */}
      <Text style={styles.label}>Your Zone</Text>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setZoneModalVisible(true)}
      >
        <Text style={styles.dropdownText}>{zone || 'Select Zone'}</Text>
      </TouchableOpacity>
      <Modal
        visible={zoneModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setZoneModalVisible(false)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setZoneModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <FlatList
              data={zones}
              renderItem={({ item }) =>
                renderItem({
                  item,
                  onPress: () => {
                    setZone(item);
                    setZoneModalVisible(false);
                  },
                })
              }
              keyExtractor={(item) => item}
            />
          </View>
        </Pressable>
      </Modal>

      {/* Dropdown cho Your Area */}
      <Text style={styles.label}>Your Area</Text>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setAreaModalVisible(true)}
      >
        <Text style={styles.dropdownText}>{area || 'Select Area'}</Text>
      </TouchableOpacity>
      <Modal
        visible={areaModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setAreaModalVisible(false)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setAreaModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <FlatList
              data={areas}
              renderItem={({ item }) =>
                renderItem({
                  item,
                  onPress: () => {
                    setArea(item);
                    setAreaModalVisible(false);
                  },
                })
              }
              keyExtractor={(item) => item}
            />
          </View>
        </Pressable>
      </Modal>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LocationScreen;