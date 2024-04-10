import { ArrowLeft2, ShoppingCart } from 'iconsax-react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FONTFAMILY } from '../../../assets/fonts'
import COLORS from '../../assets/colors/Colors'
import { ButtonComponent, ContainerComponent, RowComponent, SectionComponent, TextComponent } from '../../component'
import { CardRowItemComponent } from '../../component/CardItemComponent'

const CartScreen = ({ navigation }: any) => {
  const data = [{
    "image": "https://firebasestorage.googleapis.com/v0/b/imagereactnative.appspot.com/o/products%2FSago%20Palm%20%203.jpg?alt=media&token=84194787-1e30-495e-81ee-497a0f4e92a6",
    "_id": "1",
    "name": "Sago Palm",
    "origin": "Trung Quốc",
    "status": 240,
    "size": "Lớn",
    "quantity": "2",
    "price": 300000,
    "type": "Ưa sáng",
  },
  {
    "image": "https://firebasestorage.googleapis.com/v0/b/imagereactnative.appspot.com/o/products%2FSago%20Palm%20%203.jpg?alt=media&token=84194787-1e30-495e-81ee-497a0f4e92a6",
    "_id": "2",
    "name": "Sago Palm",
    "origin": "Trung Quốc",
    "status": 240,
    "size": "Lớn",
    "quantity": "2",
    "price": 300000,
    "type": "Ưa sáng",
  },
  {
    "image": "https://firebasestorage.googleapis.com/v0/b/imagereactnative.appspot.com/o/products%2FSago%20Palm%20%203.jpg?alt=media&token=84194787-1e30-495e-81ee-497a0f4e92a6",
    "_id": "3",
    "name": "Sago Palm",
    "origin": "Trung Quốc",
    "status": 240,
    "size": "Lớn",
    "quantity": "2",
    "price": 300000,
    "type": "Ưa sáng",
  },
  {
    "image": "https://firebasestorage.googleapis.com/v0/b/imagereactnative.appspot.com/o/products%2FSago%20Palm%20%203.jpg?alt=media&token=84194787-1e30-495e-81ee-497a0f4e92a6",
    "_id": "4",
    "name": "Sago Palm",
    "origin": "Trung Quốc",
    "status": 240,
    "quantity": "2",
    "size": "Lớn",
    "price": 300000,
    "type": "Ưa sáng",
  },
  {
    "image": "https://firebasestorage.googleapis.com/v0/b/imagereactnative.appspot.com/o/products%2FSago%20Palm%20%203.jpg?alt=media&token=84194787-1e30-495e-81ee-497a0f4e92a6",
    "quantity": "2",
    "_id": "5",
    "name": "Sago Palm",
    "origin": "Trung Quốc",
    "status": 240,
    "size": "Lớn",
    "price": 300000,
    "type": "Ưa sáng",
  }]
  return (
    <ContainerComponent isScroll>
      <SectionComponent styles={{ marginTop: 60}}>
        <RowComponent justify='space-between'>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeft2 size={24} color={COLORS.BLACK} />
          </TouchableOpacity>
          <TextComponent
            text='Giỏ Hàng'
            color={COLORS.BLACK}
            size={20}
            font={FONTFAMILY.poppins_medium} />
          <TouchableOpacity>
            <ShoppingCart size={24} color={COLORS.BLACK} />
          </TouchableOpacity>
        </RowComponent>
      </SectionComponent>
      <SectionComponent  >
        <CardRowItemComponent data={data} checkCartItem={true} />
      </SectionComponent>
      <SectionComponent>
        <RowComponent justify='space-between'>
          <TextComponent text='Tạm tính' color={COLORS.BLACK}/>
          <TextComponent text='2500000VNĐ' color={COLORS.BLACK} font={FONTFAMILY.poppins_bold}/>
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <ButtonComponent
          text='Đặt hàng'
          type='#009245'
          onPress={() => { }} />
      </SectionComponent>
    </ContainerComponent >
  )
}

export default CartScreen;