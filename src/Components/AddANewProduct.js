import addimg from '../Assets/addimg.png';
import '../Styles/addnewproducts.css'

export default function AddANewProducts () {
    return (
        <div>
                <div className="addnewprd-tp">
                    <p>New Product</p>
                    <div className="addnewprd-act-btns">
                        <button className='del'>Delete</button>
                        <button className='sav'>Save</button>
                    </div>
                </div>
                
                <div className="addnewprd-bd">
                    <main>
                        <img src={addimg} alt='' />
                        <br />
                        <img src={addimg} alt='' className='add-img2' />
                    </main>
                    <aside>
                        <label htmlFor=''> Product Name</label>
                        <br />
                        <input type="text" />
                        <br />
                        <label htmlFor=''>Price</label>
                        <br />
                        <input type="text" />
                        <br />
                        <label htmlFor=''>Disocunt</label>
                        <br />
                        <input type="text" />
                        <br />
                        <label htmlFor=''>Description</label>
                        <br />
                        <input type="text" />
                        <br />
                        <label htmlFor=''>Weight</label>
                        <br />
                        <input type="text" />
                        <br />
                        <label htmlFor=''>Stock</label>
                        <br />
                        <input type="text" />
                        

                    </aside>
                </div>

        </div>
    );
}