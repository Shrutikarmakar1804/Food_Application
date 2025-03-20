import { Button, 
    FormControl, 
    InputLabel, 
    MenuItem, 
    Select, 
    TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createIngredient } from '../../component/State/Ingredients/Action';

const CreateIngredientForm = () => {
    const { restaurant , ingredients } = useSelector(store=>store)
    const dispatch = useDispatch(); 
        const jwt = localStorage.getItem("jwt");
    const [formData, setFormData] = useState({
        Name:"",
        CategoryId:""
    });
    const handleSubmit = ( e ) => {
            e.preventDefault();
        const data={
           ...formData,
                restaurantId: restaurant.usersRestaurant.id
        };
            dispatch(createIngredient(data,jwt));

        console.log(data);
        
    };
        const handleInputChange = (e) => {
            const {name,value}=e.target
            setFormData({
                ...formData,[name]:value,
            })
        }
  return (
    <div className=''>
        <div className="p-5">
            <h3 className="text-gray-400 text-center text-xl pb-10">
                Create Category
            </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <TextField fullWidth
                                label="Name"
                                id="name"
                                name="name"
                                varient="outlined"
                                onChange={handleInputChange}
                                value={formData.Name}
                                ></TextField>

                                  <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                    <Select
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      value={formData.ingredientCategoryId}  
                                      label="CategoryId"
                                      onChange={handleInputChange}
                                      name="categoryId"
                                    >
                                      {ingredients.category.map((item)=>
                                    <MenuItem value={item.id}>{item.name}</MenuItem>)}
                                      
                                    </Select>
                                  </FormControl>
                    <Button variant="contained" type="submit"> 
                        Create Ingredient
                    </Button>
                </form>

        </div>
    
    </div>
  );
};

export default CreateIngredientForm;