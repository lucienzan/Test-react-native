import { StyleSheet, View } from "react-native";
export default function BalanceCard() {
  return (
    <View style={style.banner}>
      <Text style={style.text.label}>Balance</Text>
      <View style={style.balance}>
        <Text style={style.text.label}>$</Text>
        <Text style={style.text.amount}>12,543.74</Text>
      </View>
      <View style={style.balanceGrowth}>
        <Text style={style.text.growth}>+520 Today</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  banner: {
    padding: 30,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: "#6d25e5",
  },
  balance: {
    marginTop: 12,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  balanceGrowth: {
    alignItems: "flex-end",
    paddingTop: 10,
    },
  text: {
    label: {
      fontWeight: "bold",
      color: "#aaa",
    },
    amount: {
      fontWeight: "bold",
      fontSize: 40,
      color: "#fff",
    },
    growth: {
      color: "#6f6",
    },
  },
});
