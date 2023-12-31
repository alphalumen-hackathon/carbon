import { useState } from "react";
import { Text, View, FlatList } from "react-native";

import { styles } from "./Shop.style";
import BalanceCard from "../../components/BalanceCard/BalanceCard.component";
import ProductCard from "../../components/ProductCard/ProductCard.component";
import ProductCardProps from "../../components/ProductCard/ProductCard.props";
import ConfirmModal from "../../components/PurchaseConfirm/PurchaseConfirm.component";

const PRODUCTS = [
  {
    name: "Coffee Cup",
    image: require("../../../assets/products/cup.png"),
    price: 750,
  },
  {
    name: "Hoodie",
    image: require("../../../assets/products/hoodie.png"),
    price: 5500,
  },
  {
    name: "Bookmarks",
    image: require("../../../assets/products/bookmarks.png"),
    price: 190,
  },
  {
    name: "Metal Bottle",
    image: require("../../../assets/products/bottle.png"),
    price: 1400,
  },
  {
    name: "Porcelain Mug",
    image: require("../../../assets/products/mug.png"),
    price: 1000,
  },
];

const ShopScreen = () => {
  const [selectedProduct, setSelectedProduct] = useState<
    ProductCardProps["item"] | null
  >(null);

  return (
    <View style={styles.container}>
      <View style={styles.margin}>
        <View style={styles.header}>
          <Text style={styles.title}>Shop</Text>
        </View>

        <View style={styles.balanceContainer}>
          <BalanceCard />
        </View>

        <View style={styles.productsContainer}>
          <Text style={styles.featuredProductsLabel}>Featured products</Text>

          <FlatList
            style={styles.flatList}
            data={PRODUCTS}
            renderItem={({ item }) => (
              <ProductCard
                item={item}
                onPress={() => {
                  setSelectedProduct(item);
                }}
              />
            )}
            keyExtractor={(item) => item.name}
            horizontal
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
          />
        </View>

        {selectedProduct && (
          <ConfirmModal
            item={selectedProduct}
            onDismiss={() => setSelectedProduct(null)}
          />
        )}
      </View>
    </View>
  );
};

export default ShopScreen;
