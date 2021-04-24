import { ChangeDetectorRef, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  @ViewChild('fileInput') el: ElementRef;
  productForm: FormGroup;
  existing: any = [];
  listProducts;
  imgData;
  imageUrl: any;

  constructor(private formBuilder: FormBuilder,
    private cd: ChangeDetectorRef) { 
    }

  ngOnInit(): void {
    this.listProducts = JSON.parse(localStorage.getItem('productDetails'))
    this.productForm = this.formBuilder.group({
      name: [, Validators.required],
      price: [, Validators.required],
      description: [],
      image: []
    })
  }

  uploadFile(event) {
    let reader = new FileReader(); 
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.productForm.patchValue({
          image: reader.result
        });
        this.cd.markForCheck();
      };
    }
  }

onRemove(list) {
  let idx = this.listProducts.findIndex(x => x.name === list.name);
  this.listProducts.splice(idx, 1);
  localStorage.setItem('productDetails', JSON.stringify(this.listProducts));
}


  onSubmit() {
    this.existing = JSON.parse(localStorage.getItem('productDetails')) || [];
    let index = this.existing.length;
    if (this.existing.length !== 0) {
      this.existing[index] = this.productForm.value;
    } else {
      this.existing.push(this.productForm.value);
    }
    localStorage.setItem('productDetails', JSON.stringify(this.existing));
    this.productForm.reset();
  }

}
