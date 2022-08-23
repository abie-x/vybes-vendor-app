import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Sidebar from '../components/Sidebar'
import Infobar from '../components/Infobar'
import { Input, Grid, Text, Textarea } from "@nextui-org/react";
import { Checkbox, Container, Button, Radio } from "@nextui-org/react";
import {createProductAction} from '../actions/productActions'
import { IoIosAddCircle } from 'react-icons/io'; 

const Dashboard = () => {

  const [selected, setSelected] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([])
  const [title, setTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [info, setInfo] = useState('') 
  const [desc, setDesc] = useState('')
  const [imgUrl1, setImgUrl1] = useState('')
  const [imgUrl2, setImgUrl2] = useState('')
  const [imgUrl3, setImgUrl3] = useState('')
  const [depositeAmount, setDepositeAmount] = useState(0)

  const dispatch = useDispatch()

  const submitHandler = () => {
    dispatch(createProductAction({
      categoryId: selectedCategory,
      title,
      description: info,
      rentPerDuration: price,
      depositeAmount,
      tags: selected.toString(),
      imgUrl1,
      imgUrl2,
      imgUrl3
    }))
  }

  return (
    <div className='parent-container'>
        <div className='split-container2'>
            <Infobar />
            <div style={{marginLeft: "22%", marginTop: "60px", width: "100%"}}> 
              <Text
                h6 size={60} css={{textGradient: "45deg, $black -20%, $grey 50%", fontSize: "2rem"}} weight="bold">
                  Product Details
              </Text>
            </div>
            <div style={{ width: "100%", paddingBottom: "16px"}}>
              <Container style={{ marginLeft: "30%"}}>
                  <Grid style={{width: "40%", marginLeft: "40px", marginTop: "20px"}}>
                    <Input
                      size='xl'
                      clearable
                      color="black"
                      initialValue={title}
                      type="test"
                      label="Title"
                      placeholder="Enter the title.."
                      fullWidth="true"
                      aria-labelledby='title'
                      onChange={(e)  => setTitle(e.target.value)}
                    />
                  </Grid>
                  <Grid style={{width: "40%", marginLeft: "40px", marginTop: "20px"}}>
                    <Input
                      size='xl'
                      color="black"
                      type="number"
                      label="Rent per duration"
                      placeholder="Enter the rental price..."
                      aria-labelledby='number'
                      fullWidth="true"
                      onChange={e => setPrice(e.target.value)}
                    />
                  </Grid>
                {console.log(typeof(rentPerDuration))}
                  <Grid style={{width: "40%", marginLeft: "40px", marginTop: "20px"}}>
                    <Input
                      size='xl'
                      color="black"
                      type="text"
                      label="Img Url1"
                      placeholder="Enter image url-1..."
                      aria-labelledby='img-url'
                      fullWidth="true"
                      onChange={e => setImgUrl1(e.target.value)}
                    />
                  </Grid>
                  <Grid style={{width: "40%", marginLeft: "40px", marginTop: "20px"}}>
                    <Input
                      size='xl'
                      color="black"
                      type="text"
                      label="Img Url2"
                      placeholder="Enter image url-2..."
                      aria-labelledby='img-url'
                      fullWidth="true"
                      onChange={e => setImgUrl2(e.target.value)}
                    />
                  </Grid>
                  <Grid style={{width: "40%", marginLeft: "40px", marginTop: "20px"}}>
                    <Input
                      size='xl'
                      color="black"
                      type="text"
                      label="Img Url3"
                      placeholder="Enter image url-3..."
                      aria-labelledby='img-url'
                      fullWidth="true"
                      onChange={e => setImgUrl3(e.target.value)}
                    />
                  </Grid>
                  <Grid style={{width: "40%", marginLeft: "40px", marginTop: "20px"}}>
                    <Input
                      size='xl'
                      color="black"
                      type="number"
                      label="Deposite Amount"
                      placeholder="Enter deposite amount"
                      aria-labelledby='number'
                      fullWidth="true"
                      onChange={e => setDepositeAmount(e.target.value)}
                    />
                  </Grid>
                  <Grid style={{width: "40%", marginLeft: "40px", marginTop: "20px"}}>
                    <Textarea
                    size='xl'
                      label="Product information"
                      placeholder="What else included in the set..."
                      fullWidth="true"
                      aria-labelledby='product-info'
                      onChange={(e) => setInfo(e.target.value)}
                    />
                  </Grid>
                  <Grid style={{marginLeft: "40px", marginTop: "20px", marginBottom: "4px"}}>
                    <p style={{fontSize: "19px", marginBottom: "10px"}}>Categories</p>
                    <Radio.Group
                      color="secondary"
                      value={selectedCategory}
                      onChange={setSelectedCategory}
                      orientation='horizontal'
                      size='sm'
                      aria-labelledby='tags'
                    >
                        <Radio value="EB70F240-AF49-4746-9B45-0BC89DB5020D">Antiques</Radio>
                        <Radio value="A4107F07-EE71-423C-BB0C-265C079904D2">Ear rings</Radio>
                        <Radio value="0DE62BAD-1EBD-4355-99D9-285FFA06E50C">Necklace</Radio>
                        <Radio value="8E6EF1D9-27E8-404D-B16C-6F34FCD817FA">Bangles</Radio>
                        <Radio value="F8AF65BF-42D3-4983-A965-CE9F1A78F9BD">Bridal set</Radio>
                        <Radio value="228C3C85-D660-4D39-845F-FA5EA9416E30">Rings</Radio>
                    </Radio.Group>
                  </Grid>
                  <Grid style={{marginLeft: "40px", marginTop: "20px", marginBottom: "4px"}}>
                    <p style={{fontSize: "19px", marginBottom: "10px"}}>Tags</p>
                    <Checkbox.Group
                      color="secondary"
                      value={selected}
                      onChange={setSelected}
                      orientation='horizontal'
                      size='sm'
                      aria-labelledby='tags'
                    >
                        <Checkbox value="Reception">Reception</Checkbox>
                        <Checkbox value="Marriage">Marriage</Checkbox>
                        <Checkbox value="Haldi">Haldi</Checkbox>
                        <Checkbox value="Party">Party</Checkbox>
                        <Checkbox value="Celerations">Celebrations</Checkbox>
                    </Checkbox.Group>
                  </Grid>
                  <Grid style={{marginLeft: "40px", marginTop: "20px", marginBottom: "4px", display: "flex", justifyContent: "center", width: "40%", }}>
                    <Button size={'lg'} color="success" onClick={() => submitHandler()}>
                      Add Product
                    </Button>
                  </Grid>
                  </Container>
            </div>
        </div>
    </div>
  )
}

export default Dashboard