# Vibe UI

Modern, modular, and aesthetic Angular UI Component Library.
Built with Angular 21, CDK, and Lucide Icons.

## Installation

Install the library and required peer dependencies:

```bash
npm install @kusena/vibe-ui lucide-angular @angular/cdk
```

## Setup

### 1. Styles
Import the global styles in your `styles.scss`:

```scss
@import '@kusena/vibe-ui/styles/vibe-ui';
```

Or add to your `angular.json`:

```json
"styles": [
  "node_modules/@kusena/vibe-ui/styles/vibe-ui.css",
  "src/styles.scss"
]
```

### 2. Icons
Import `LucideAngularModule` and icons you want to use in your application.

## Components

### Card (`vb-card`)
Modular card component with header, body, and footer.

```html
<vb-card maxWidth="600px">
  <vb-card-header>
    <h3 class="vb-card__title">Card Title</h3>
    <div class="vb-card__actions">
       <button>Action</button>
    </div>
  </vb-card-header>
  
  <vb-card-body [noPadding]="false">
    <p>Card content goes here.</p>
  </vb-card-body>
  
  <vb-card-footer>
    <button>Cancel</button>
    <button>Save</button>
  </vb-card-footer>
</vb-card>
```

### Button (`vb-button`)
Versatile button component with variants and sizes.

```html
<!-- Variants: primary, secondary, danger, outline, ghost, link, normal (default) -->
<vb-button variant="primary" size="md" (onClick)="save()">
  Save Changes
</vb-button>

<!-- With Icon -->
<vb-button variant="danger" size="sm">
  <vb-icon size="sm"><lucide-icon [img]="Trash"></lucide-icon></vb-icon>
  Delete
</vb-button>

<!-- Loading State -->
<vb-button [loading]="isLoading">Loading...</vb-button>
```

### Avatar (`vb-avatar`)
Display user profile image or initials with consistent background colors.

```html
<!-- Image -->
<vb-avatar src="assets/user.jpg" name="John Doe" size="md" shape="circle"></vb-avatar>

<!-- Initials (Auto background color) -->
<vb-avatar name="John Doe" size="md"></vb-avatar>

<!-- Sizes: sm, md, lg, xl -->
<!-- Shapes: circle, square, rounded -->
```

### Modal (`vb-modal`)
Service-based modal system using Angular CDK.

**1. Create Modal Component:**
```typescript
@Component({
  imports: [ModalComponent, ModalHeaderComponent, ModalBodyComponent, ModalFooterComponent, ...],
  template: `
    <vb-modal>
      <vb-modal-header title="Edit User"></vb-modal-header>
      <vb-modal-body>
        <form>...</form>
      </vb-modal-body>
      <vb-modal-footer>
        <vb-button (onClick)="close()">Cancel</vb-button>
        <vb-button variant="primary">Save</vb-button>
      </vb-modal-footer>
    </vb-modal>
  `
})
export class MyModalComponent {
  constructor(private dialogRef: DialogRef) {}
  close() { this.dialogRef.close(); }
}
```

**2. Open Modal:**
```typescript
import { VbModalService } from '@kusena/vibe-ui';

export class AppComponent {
  constructor(private modalService: VbModalService) {}

  open() {
    this.modalService.open(MyModalComponent, {
      data: { userId: 1 }
    });
  }
}
```

### Form Field (`vb-form-field`)
Wrapped input components with support for labels, hints, prefixes, and suffixes.

```html
<vb-form-field>
  <label>Email Address</label>
  
  <!-- Content before input (Icon) -->
  <div class="vb-form-field-prefix">
    <vb-icon><lucide-icon [img]="Mail"></lucide-icon></vb-icon>
  </div>
  
  <!-- Input with vbInput directive -->
  <input vbInput type="email" placeholder="user@example.com">
  
  <!-- Hint text -->
  <div class="vb-form-field-hint">We'll never share your email.</div>
</vb-form-field>
```

---

## License
MIT
