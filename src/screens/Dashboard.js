import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Infobar from '../components/Infobar'
import { Input, Grid, Text, Textarea } from "@nextui-org/react";
import { Checkbox, Container } from "@nextui-org/react";

const Dashboard = () => {

  const [selected, setSelected] = useState([]);
  const [title, setTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [info, setInfo] = useState('') 
  const [desc, setDesc] = useState('')
  const [imgUrl, setImgUrl] = useState('')

  // const selectedValue = React.useMemo(
  //   () => Array.from(selected).join(", ").replaceAll("_", " "),
  //   [selected]
  // );

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
            <div style={{ width: "100%"}}>
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
                      clearable
                      color="black"
                      type="test"
                      label="Sub-Title"
                      aria-labelledby='sub-title'
                      placeholder="Enter the sub-title.."
                      fullWidth="true"
                      onChange={(e) => setSubTitle(e.target.value)}
                    />
                  </Grid>
                  <Grid style={{width: "40%", marginLeft: "40px", marginTop: "20px"}}>
                    <Input
                      size='xl'
                      color="black"
                      type="number"
                      label="Price"
                      placeholder="Enter the price"
                      aria-labelledby='number'
                      fullWidth="true"
                      onChange={e => setPrice(e.target.value)}
                    />
                  </Grid>
                  <Grid style={{marginLeft: "40px", marginTop: "20px"}}>
                  <p style={{fontSize: "20px", marginBottom: "10px"}}>Tags</p>
                  <Checkbox.Group
                    color="secondary"
                    value={selected}
                    onChange={setSelected}
                    orientation='horizontal'
                    size='md'
                    aria-labelledby='tags'
                  >
                    <Checkbox value="Reception">Reception</Checkbox>
                    <Checkbox value="Marriage">Marriage</Checkbox>
                    <Checkbox value="Haldi">Haldi</Checkbox>
                  </Checkbox.Group>
                  </Grid>
                {console.log(title)}
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
                  <Grid style={{width: "40%", marginLeft: "40px", marginTop: "20px"}}>
                    <Textarea
                    size='xl'
                      label="Description"
                      placeholder="Describe about the product..."
                      fullWidth="true"
                      aria-labelledby='description'
                      onChange={(e) => setDesc(e.target.value)}
                    />
                  </Grid>
                  <Grid style={{width: "40%", marginLeft: "40px", marginTop: "20px"}}>
                    <Textarea
                      size='xl'
                      label="Image Url"
                      placeholder="Enter image Url..."
                      fullWidth="true"
                      aria-labelledby='img-url'
                      onChange={(e) => setImgUrl(e.target.value)}
                    />
                  </Grid>
                  </Container>
            </div>
            {/* <Grid.Container gap={4} style={{marginTop: "20px"}}>
                <Grid style={{width: "20%"}}>
                <Input
                size='xl'
                  clearable
                  color="success"
                  initialValue="getnextui"
                  helperText="Excelent username"
                  type="test"
                  label="Username"
                  placeholder="Enter your username"
                />
                    
                </Grid>
            </Grid.Container> */}
        </div>
    </div>
  )
}

export default Dashboard