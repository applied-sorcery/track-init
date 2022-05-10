const CombatMenu = ({styes}) => {
  <View style={styles.container}>
    <View style={styles.combatMenu}>
      <TouchableOpacity
        onPress={() => onNewCombat()}
        style={[styles.button, styles.menuBtn]}>
        <Text style={styles.btnText}>New</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onLoadcombat()}
        style={[styles.button, styles.menuBtn]}>
        <Text style={styles.btnText}>Load</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onSaveCombat()}
        style={[styles.button, styles.menuBtn]}>
        <Text style={styles.btnText}>Save</Text>
      </TouchableOpacity>
    </View>
  </View>;
};

export default CombatMenu;
