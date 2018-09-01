<h1 class="no-t-m">Base Typography</h1>

```html
<h1>h1. This is a very large header.</h1>
<h2>h2. This is a large header.</h2>
<h3>h3. This is a medium header.</h3>
<h4>h4. This is a moderate header.</h4>
<h5>h5. This is a small header.</h5>
<h6>h6. This is a tiny header.</h6>
<hr>
<p>This is a paragraph. ... You can also use em to <em>italicize your words</em>.</p>
<hr>
<p class="lead">This is a <strong>LEADING</strong> paragraph.</p>
```
    
<h1>h1. This is a very large header.</h1>
<h2>h2. This is a large header.</h2>
<h3>h3. This is a medium header.</h3>
<h4>h4. This is a moderate header.</h4>
<h5>h5. This is a small header.</h5>
<h6>h6. This is a tiny header.</h6>
<p>This is a paragraph. Paragraphs are preset with a font size, line height and spacing to match the overall vertical rhythm. To show what a paragraph looks like this needs a little more content so, did you know that there are storms occurring on Jupiter that are larger than the Earth? Pretty cool. Wrap strong around type to <strong>make it bold!</strong>. You can also use em to <em>italicize your words</em>.</p>
<p class="lead">This is a <strong>LEADING</strong> paragraph. Paragraphs are preset with a font size, line height and spacing to match the overall vertical rhythm. To show what a paragraph looks like this needs a little more content so, did you know that there are storms occurring on Jupiter that are larger than the Earth? Pretty cool. Wrap strong around type to <strong>make it bold!</strong>. You can also use em to <em>italicize your words</em>.</p>

---

### Base Typography - headers - no margin

```html
<h1 class="no-t-m">h1. This is a very large header no top margin.</h1>
<h2 class="no-t-m">h2. This is a large header no top margin.</h2>
<p class="no-b-m">This is a paragraph <strong>no bottom margin</strong>.</p>
<hr>
<h3 class="no-t-m">h2. This is a large header no top margin.</h3>
<p>This is a paragraph. Paragraphs are ...</p>
```

<h1 class="no-t-m">h1. This is a very large header no top margin.</h1>
<h2 class="no-t-m">h2. This is a large header no top margin.</h2>
<p class="no-b-m">This is a paragraph <strong>no bottom margin</strong>. Paragraphs are preset with a font size, line height and spacing to match the overall vertical rhythm. To show what a paragraph looks like this needs a little more content so, did you know that there are storms occurring on Jupiter that are larger than the Earth? Pretty cool. Wrap strong around type to <strong>make it bold!</strong>. You can also use em to <em>italicize your words</em>.</p>
<hr>
<h3 class="no-t-m">h2. This is a large header no top margin.</h3>
<p>This is a paragraph. Paragraphs are preset with a font size, line height and spacing to match the overall vertical rhythm. To show what a paragraph looks like this needs a little more content so, did you know that there are storms occurring on Jupiter that are larger than the Earth? Pretty cool. Wrap strong around type to <strong>make it bold!</strong>. You can also use em to <em>italicize your words</em>.</p>


---

### Anchor

```html_example
<a href="#">It's dangerous to go alone, take this.</a>
```



# Accordion

Use accordion settings in `_settings.scss` to turn on/off plus/minus up/down arrows. 

```scss
$accordion-plusminus: true;
```

Also be aware that custom settings for accordions need to be set in `_settingsCustom.scss`

```scss
$accordion-bg-img-size: 16px 26px; //24px default, 26x16 for arrows
$accordion-icon-bg-img: $gray-50;
$accordion-icon-bg-img-hover: $black;
```

```html_example
<ul class="accordion" data-accordion data-allow-all-closed="true">
  <li class="accordion-item is-active" data-accordion-item>
    <a href="#" class="accordion-title">Accordion 1</a>
    <div class="accordion-content" data-tab-content>
      <p>Panel 1. Lorem ipsum dolor</p>
      <a href="#">Nowhere to Go</a>
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a href="#" class="accordion-title">Accordion 2</a>
    <div class="accordion-content" data-tab-content>
      <p>Panel 2.  Lorem ipsum dolor</p>
    </div>
  </li>
</ul>
```



# Breadcrumbs

```html_example
<nav aria-label="You are here:" role="navigation">
  <ul class="breadcrumbs">
    <li><a href="#">Home</a></li>
    <li><a href="#">Features</a></li>
    <li class="disabled">Gene Splicing</li>
    <li>
      <span class="show-for-sr">Current: </span> Cloning
    </li>
  </ul>
</nav>
```



# Buttons

### Regular Buttons

```html_example
<div class="input-wrapper">
  <!-- Anchors (links) -->
  <a href="#" class="button">Learn More</a>
  <a href="#" class="button">View All Features</a>
  <!-- Buttons (actions) -->
  <button type="button" class="success button">Save</button>
  <button type="button" class="alert button">Delete</button>
</div>
<div class="input-wrapper">
  <a class="button tiny" href="#">So Tiny</a>
  <a class="button small" href="#">So Small</a>
  <a class="button" href="#">So Basic</a>
  <a class="button large" href="#">So Large</a>
</div>
<div class="input-wrapper">
  <a class="button primary" href="#">Primary</a>
  <a class="button secondary" href="#">Secondary</a>
  <a class="button success" href="#">Success</a>
  <a class="button alert" href="#">Alert</a>
  <a class="button warning" href="#">Warning</a>
</div>
```

### Hollow Buttons

```html_example
<div class="input-wrapper">
  <button class="hollow button">Primary</button>
  <button class="hollow button secondary">Secondary</button>
  <button class="hollow button success">Success</button>
  <button class="hollow button alert">Alert</button>
  <button class="hollow button warning">Warning</button>
</div>
```

### Expanded buttons

```html_example
<div class="input-wrapper">
  <a class="button expanded" href="#">Such Expand</a>
</div>
<div class="input-wrapper">
  <a class="button small expanded" href="#">Wow, Small Expand</a>
</div>
```

### Disabled Buttons

```html_example
<div class="input-wrapper">
  <button type="button" class="button primary" disabled>Disabled</button>
  <button type="button" class="button secondary" disabled>Disabled</button>
  <button type="button" class="button success" disabled>Disabled</button>
  <button type="button" class="button alert" disabled>Disabled</button>
  <button type="button" class="button warning" disabled>Disabled</button>
</div>
```

### Clear Buttons

```html_example
<div class="input-wrapper">
  <a class="clear button" href="#">Primary</a>
  <a class="clear button secondary" href="#">Secondary</a>
  <a class="clear button success" href="#">Success</a>
  <a class="clear button alert" href="#">Alert</a>
  <a class="clear button warning" href="#">Warning</a>
</div>
```

### Square Buttons

Sqaure buttons are generated from `icon-{icon-name}.svg` files defined in `_settingsCustom.scss` defining global touch size, and each icon size in icons map

```scss
$square-button-size: 44px;
$square-button-icons: (
  'icon-close': ('name': icon-close-24, 'color': $gray-50, 'hover-color': $black),
  'icon-close-small': ('name': icon-close-12, 'size': 12px, 'color': $gray-50, 'hover-color': $black)
);
$button-icons-color: $dark-gray;
$button-icons-hover-color: $black;
```

```html_example
<div class="input-wrapper">
  <a class="square-button icon-close" href="#"><span class="show-for-sr">Button</span></a>
  <a class="square-button icon-close-small" href="#"><span class="show-for-sr">Button</span></a>
</div>
```



# Buttons Groups

### Coloring

```html_example
<div class="input-wrapper">
  <div class="button-group">
    <a class="secondary button">View</a>
    <a class="success button">Edit</a>
    <a class="warning button">Share</a>
    <a class="alert button">Delete</a>
  </div>
</div>
```

### Equal widths

```html_example
<div class="input-wrapper">
  <div class="expanded button-group">
    <a class="button">Expanded</a>
    <a class="button">Button</a>
    <a class="button">Group</a>
  </div>
</div>
```

### Stacked (from medium down)
```html_example
<div class="input-wrapper">
  <div class="stacked-for-medium button-group">
    <a class="button">How</a>
    <a class="button">Low</a>
    <a class="button">Can</a>
    <a class="button">You</a>
    <a class="button">Go</a>
  </div>
</div>
```

### Sizing
```html_example
<div class="input-wrapper">
  <div class="small button-group">
    <a class="button">Small</a>
    <a class="button">Button</a>
    <a class="button">Group</a>
  </div>
</div>
```



# Callouts

```html
<div class="callout">
  <h5>This is a basic callout</h5>
  <p>It has an easy to override visual style, and is appropriately subdued.</p>
  <a href="#">It's dangerous to go alone, take this.</a>
</div>
<div class="callout primary">
  ...
</div>
<div class="callout secondary">
  ...
</div>
<div class="callout success">
  ...
</div>
<div class="callout warning">
  ...
</div>
<div class="callout alert">
  ...
</div>
```

<div class="input-wrapper">
  <div class="callout">
    <h5>This is a basic callout</h5>
    <p>It has an easy to override visual style, and is appropriately subdued.</p>
    <a href="#">It's dangerous to go alone, take this.</a>
  </div>
</div>
<div class="input-wrapper">
  <div class="callout primary">
    <h5>This is a Primary callout</h5>
    <p>It has an easy to override visual style, and is appropriately subdued.</p>
    <a href="#">It's dangerous to go alone, take this.</a>
  </div>
</div>
<div class="input-wrapper">
  <div class="callout secondary">
    <h5>This is a secondary callout</h5>
    <p>It has an easy to override visual style, and is appropriately subdued.</p>
    <a href="#">It's dangerous to go alone, take this.</a>
  </div>
</div>
<div class="input-wrapper">
  <div class="callout success">
    <h5>This is a success callout</h5>
    <p>It has an easy to override visual style, and is appropriately subdued.</p>
    <a href="#">It's dangerous to go alone, take this.</a>
  </div>
</div>
<div class="input-wrapper">
  <div class="callout warning">
    <h5>This is a warning callout</h5>
    <p>It has an easy to override visual style, and is appropriately subdued.</p>
    <a href="#">It's dangerous to go alone, take this.</a>
  </div>
</div>
<div class="input-wrapper">
  <div class="callout alert">
    <h5>This is a alert callout</h5>
    <p>It has an easy to override visual style, and is appropriately subdued.</p>
    <a href="#">It's dangerous to go alone, take this.</a>
  </div>
</div>

### Closable Callouts

```html_example
<div class="callout alert" data-closable>
  <h5>This is Important!</h5>
  <p>But when you're done reading it, click the close button in the corner to dismiss this alert.</p>
  <p>I'm using the default <code>data-closable</code> parameters, and simply fade out.</p>
  <button class="square-button icon-close-callout close-button" aria-label="Dismiss alert" type="button" data-close>
    <span aria-hidden="true" class="show-for-sr">&times;</span>
  </button>
</div>
```



# Drilldown menu & Off-canvas

```scss
$close-section-height: get-side($square-button-size, top);
$drilldown-menu-font-size: (
  small: 16px
);
$drilldown-item-color: $body-font-color;
$drilldown-item-color-hover: $drilldown-item-color;
$drilldown-item-background-color: $drilldown-background;
$drilldown-item-background-color-hover: $gray-20;
$drilldown-arrows-defs: (
  prev : ('name' : icon-prev-10x14, 'size': 14px 10px, 'offset': auto 17px, 'color': $medium-gray, 'color-hover': $dark-gray),
  next : ('name' : icon-next-10x14, 'size': 14px 10px, 'offset': auto 17px, 'color': $medium-gray, 'color-hover': $dark-gray),
);
```

<div class="grid-x grid-padding-x">
  <div class="input-wrapper">
    <button class="square-button icon-hamburger" data-toggle="offCanvas"><span class="show-for-sr">Hamburger</span></button>
  </div>
</div>
<div class="grid-x grid-padding-x">
  <div class="off-canvas-wrapper">
    <div class="off-canvas position-left" id="offCanvas" data-transition="overlap" data-off-canvas>
      <div class="close-section-wrapper">
        <button class="square-button icon-close-small close-button" data-close aria-label="Close modal" type="button"><span aria-hidden="true" class="show-for-sr">&times;</span></button>
      </div>
      <nav>
        <ul class="vertical menu drilldown" data-drilldown data-back-button="<li class='js-drilldown-back'><a tabindex='0'>Povratak</a></li>">
          <li><a href="#">Početna</a></li>
          <li>
            <a href="#"><span class="drilldown-item">Item-1</span></a>
            <ul class="menu vertical nested">
              <li class="submenu-title"><a href="#"><span class="drilldown-item">Item-1-1</span></a>
                <ul class="menu vertical nested">
                  <li><a href="#">Item-1-1-1</a></li>
                  <li><a href="#">Item-1-1-2</a></li>
                  <li><a href="#">Item-1-1-3</a></li>
                  <li><a href="#">Item-1-1-4</a></li>
                  <li><a href="#">Item-1-1-5</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="submenu-title"><a href="#"><span class="drilldown-item">Item-1-1</span></a></li>
        </ul>
      </nav>
    </div>
  </div>
</div>

```html
<body>
  <div class="off-canvas position-left" id="offCanvas" data-off-canvas>
    <div class="close-section-wrapper">
      <button class="square-button icon-close-small close-button" data-close aria-label="Close modal" type="button"><span aria-hidden="true" class="show-for-sr">&times;</span></button>
    </div>
    <nav>
      <ul class="vertical menu drilldown" data-drilldown data-back-button="<li class='js-drilldown-back'><a tabindex='0'>Povratak</a></li>">
        <li><a href="#">Početna</a></li>
        <li>
          <a href="#"><span class="drilldown-item">Item-1</span></a>
          <ul class="menu vertical nested">
            <li class="submenu-title"><a href="#"><span class="drilldown-item">Item-1-1</span></a>
              <ul class="menu vertical nested">
                <li><a href="#">Item-1-1-1</a></li>
                <li><a href="#">Item-1-1-2</a></li>
                <li><a href="#">Item-1-1-3</a></li>
                <li><a href="#">Item-1-1-4</a></li>
                <li><a href="#">Item-1-1-5</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="submenu-title"><a href="#"><span class="drilldown-item">Item-1-1</span></a></li>
      </ul>
    </nav>
  </div>
  <div class="off-canvas-content" data-off-canvas-content>
    <button class="square-button icon-hamburger" data-toggle="offCanvas"><span class="show-for-sr">Hamburger</span></button>
    <!-- Your page content lives here -->
  </div>
</body>
```



# Forms

Labels for inline, middle aligned inputs have new, responsive `.middle` class names depending on the grid breakpoint classes: `.middle-{screen-size-breakpoint}`

New Form elements settings added to `_customSettings.scss` under Forms section

```scss
$form-label-margin: 0 0 rem-calc(8);
$legend-font-size: $form-label-font-size;
$legend-color: $form-label-color;
$legend-line-height: $form-label-line-height;
$form-legend-margin: $form-label-margin;
$form-checkbox-margin: 0 rem-calc(32) 0 0;
$form-checkbox-label-padding: 0 0 0 rem-calc(24);
$checkbox-icons: (
  'checkbox': (
    'default': ('name': icon-checkbox-16, 'size': 16px, 'color': $gray-50),
    'checked': ('name': icon-checkbox-8, 'size': 8px, 'color': $primary-color, 'offset': 4px)
  ),
  'radio': (
    'default': ('name': icon-radio-16, 'size': 16px, 'color': $gray-50),
    'checked': ('name': icon-radio-8, 'size': 8px, 'color': $primary-color, 'offset': 4px),
  )
);
$select-icon-size: 6px 12px;
$input-error-margin: 8px 0 0;
```

```html_example
<form class="grid-x grid-padding-x small-padding-collapse" data-abide novalidate>
  <div class="small-12 cell">
    <div class="grid-x grid-padding-x">
      <div class="medium-6 cell">
        <div class="input-wrapper">
          <label>Input Label</label>
          <input type="text" placeholder="placeholder text" required aria-errormessage="inputField1">
          <span class="form-error" id="inputField1">
            Yo, you had better fill this out, it's required.
          </span>
        </div>
        <div class="input-wrapper">
          <label>Input Label</label>
          <input type="text" placeholder="placeholder text">
        </div>
        <div class="input-wrapper">
          <label>Password</label>
          <input type="password" aria-describedby="passwordHelpText">
          <p class="help-text" id="passwordHelpText">Your password must have at least 10 characters, a number, and an Emoji.</p>
        </div>
        <div class="input-wrapper">
          <label for="input-file" class="button primary">Input file...</label>
          <input id="input-file" type="file" aria-describedby="passwordHelpText">
        </div>
      </div>
      <div class="medium-6 cell">
        <div class="input-wrapper">
          <label>Password</label>
          <div class="input-group">
            <span class="input-group-label">$</span>
            <input class="input-group-field no-r-bor" type="number">
            <div class="input-group-button">
              <input type="submit" class="button" value="Submit">
            </div>
          </div>
        </div>
        <div class="input-wrapper">
          <label>Input Label</label>
          <div class="input-group">
            <input type="text" placeholder="small-9.cell" class="input-group-field" />
            <span class="input-group-label">.com</span>
          </div>
        </div>
        <div class="input-wrapper">
          <label>Password</label>
          <div class="input-with-icon">
            <input type="text" aria-describedby="input text">
            <button class="square-button icon-close-small"><span class="show-for-sr">remove</span></button>
          </div>
        </div>
      </div>
    </div>
    <div class="grid-x grid-padding-x input-wrapper">
      <div class="small-12 large-4 cell">
        <label for="middle-label" class="large-text-right large-middle">Label</label>
      </div>
      <div class="small-12 large-8 cell">
        <input type="text" id="middle-label" placeholder="Right middle-aligned text input for ^large">
      </div>
    </div>
    <div class="grid-x grid-padding-x input-wrapper">
      <fieldset class="small-12 large-8 large-offset-4 cell">
        <legend>Choose Your Favorite</legend>
        <div class="form-control-wrapper">
          <input type="radio" name="pokemon" value="Red" id="pokemonRed" required><label for="pokemonRed">Red</label>
          <input type="radio" name="pokemon" value="Blue" id="pokemonBlue"><label for="pokemonBlue">Blue</label>
          <input type="radio" name="pokemon" value="Yellow" id="pokemonYellow"><label for="pokemonYellow">Yellow</label>
        </div>
      </fieldset>
    </div>
    <div class="grid-x grid-padding-x input-wrapper">
      <div class="small-12 large-4 cell">
        <label for="middle-label" class="large-text-right large-middle">Check these out</label>
      </div>
      <div class="small-12 large-8 cell">
        <div class="form-control-wrapper">
          <input id="checkbox1" type="checkbox"><label for="checkbox1">Checkbox 1</label>
          <input id="checkbox2" type="checkbox"><label for="checkbox2">Checkbox 2</label>
          <input id="checkbox3" type="checkbox"><label for="checkbox3">Checkbox 3</label>
        </div>
      </div>
    </div>
    <div class="grid-x grid-padding-x input-wrapper">
      <div class="small-12 large-4 cell">
        <label class="large-text-right large-middle">Select Box</label>
      </div>
      <div class="small-12 large-8 cell">
        <select>
          <option>Please select...</option>
          <option value="husker">Husker</option>
          <option value="starbuck">Starbuck</option>
          <option value="hotdog">Hot Dog</option>
          <option value="apollo">Apollo</option>
        </select>
      </div>
    </div>
  </div>
  <div class="small-12 cell">
    <div class="input-wrapper">
      <label>Textarea Label</label>
      <textarea placeholder="small-12.cell" rows="6"></textarea>
    </div>
    <div class="input-wrapper">
      <button class="button primary" type="submit">Submit</button>
    </div>
  </div>
</form>
```



# Labels

```html_example
<div class="input-wrapper">
  <span class="primary label">Primary Label</span>
  <span class="secondary label">Secondary Label</span>
  <span class="success label">Success Label</span>
  <span class="alert label">Alert Label</span>
  <span class="warning label">Warning Label</span>
</div>
```



# Pagination

Pagination settings are refactored and can be set up under Pagination section in `_customSettings.scss`. Bunch of new settings available:
```scss
$pagination-margin: 0;
$pagination-line-height: 1;
$pagination-item-sizes: (
  touch: ('size': 44px, 'a-padding': 7px, 'li-margin': 0, 'inner-padding': 0 7px),
  mouse: ('size' : 30px, 'a-padding': 0, 'li-margin': 0 2px, 'inner-padding': 0 7px)
);
$pagination-arrows-defs: (
  next: ('name': icon-next-10x14, 'size': 10px 14px, 'color': $medium-gray, 'color-hover': $primary-color, 'padding-side': right, 'has-text': true),
  previous: ('name': icon-prev-10x14, 'size': 10px 14px, 'color': $medium-gray, 'color-hover': $primary-color, 'padding-side': left, 'has-text': true),
  first: ('name': icon-first-16x14, 'size': 16px 14px, 'color': $medium-gray, 'color-hover': $primary-color, 'padding-side': left, 'has-text': false),
  last: ('name': icon-last-16x14, 'size': 16px 14px, 'color': $medium-gray, 'color-hover': $primary-color, 'padding-side': right, 'has-text': false)
);
$pagination-item-border: 1px solid $medium-gray;
$pagination-item-border-color-hover: $primary-color;
$pagination-item-color-hover: $primary-color;
```

```html_example
<ul class="pagination text-center no-bullet" role="navigation" aria-label="Pagination">
  <li class="pagination-first disabled">
    <span class="show-for-sr"><span>Prva</span></span>
  </li>
  <li class="pagination-previous disabled show-for-medium">
    <span><span>Prethodna</span></span>
  </li>
  <li class="hide-for-small-only">
    <a href="#"><span>1</span></a>
  </li>
  <li>
    <a href="#"><span>2</span></a>
  </li>
  <li class="current">
    <span>3</span>
  </li>
  <li>
    <a href="#"><span>4</span></a>
  </li>
  <li class="hide-for-small-only">
    <a href="#"><span>5</span></a>
  </li>
  <li class="pagination-next show-for-medium">
    <a href="#" aria-label="next page">
      <span>Sledeća</span>
    </a>
  </li>
  <li class="pagination-last">
    <a href="#" aria-label="last page"><span class="show-for-sr">Poslednja</span></a>
  </li>
</ul>
```



# Progress bar

```html
<div class="secondary progress" role="progressbar" tabindex="0" aria-valuenow="25" aria-valuemin="0" aria-valuetext="25 percent" aria-valuemax="100">
  <div class="progress-meter" style="width: 25%"></div>
</div>

<div class="success progress">
  <div class="progress-meter" style="width: 50%"></div>
</div>

<div class="warning progress">
  <div class="progress-meter" style="width: 50%"></div>
</div>

<div class="alert progress">
  <div class="progress-meter" style="width: 75%">
    <p class="progress-meter-text">75%</p>
  </div>
</div>

<div class="progress" role="progressbar" tabindex="0" aria-valuenow="25" aria-valuemin="0" aria-valuetext="25 percent" aria-valuemax="100">
  <span class="progress-meter" style="width: 25%">
    <p class="progress-meter-text">25%</p>
  </span>
</div>
```

<div class="input-wrapper">
  <div class="secondary progress" role="progressbar" tabindex="0" aria-valuenow="25" aria-valuemin="0" aria-valuetext="25 percent" aria-valuemax="100">
    <div class="progress-meter" style="width: 25%"></div>
  </div>
</div>
<div class="input-wrapper">
  <div class="success progress" role="progressbar" tabindex="0" aria-valuenow="50" aria-valuemin="0" aria-valuetext="50 percent" aria-valuemax="100">
    <div class="progress-meter" style="width: 50%"></div>
  </div>
</div>
<div class="input-wrapper">
  <div class="warning progress" role="progressbar" tabindex="0" aria-valuenow="50" aria-valuemin="0" aria-valuetext="50 percent" aria-valuemax="100">
    <div class="progress-meter" style="width: 50%"></div>
  </div>
</div>
<div class="input-wrapper">
  <div class="alert progress" role="progressbar" tabindex="0" aria-valuenow="75" aria-valuemin="0" aria-valuetext="75 percent" aria-valuemax="100">
    <div class="progress-meter" style="width: 75%">
      <p class="progress-meter-text">75%</p>
    </div>
  </div>
</div>
<div class="progress" role="progressbar" tabindex="0" aria-valuenow="25" aria-valuemin="0" aria-valuetext="25 percent" aria-valuemax="100">
  <span class="progress-meter" style="width: 25%">
    <p class="progress-meter-text">25%</p>
  </span>
</div>

### Native Progress

<p>As an alternative to our custom progress bar style, you can also opt to use the native <code>&lt;progress&gt;</code> element. It provides a more succinct way to create progress bars, but it's not supported in IE9, and some other older browsers. <a href="https://caniuse.com/#feat=progress">View <code>&lt;progress&gt;</code> element support.</a></p>

```html_example
<progress max="100" value="75"></progress>
```



# Slider

This handy lil slider is perfect for setting specific values within a range.

Customization can be done is `_customSettings.scss` under *Slider* section.

```scss
$slider-margin: 18px 0; //Form element height (40px) - slider line height (4px) divided by two (top/bottom margin)
$slider-touch-color: $primary-color;
$slider-touch-color-hover: scale-color($slider-touch-color, $lightness: -20%);
$slider-vertical-height: 200px;

$slider-sizes: (
  touch: ('dragger-size': 44px 24px, 'icon-name': icon-slider-24x24, 'icon-size': 24px),
  mouse: ('dragger-size' : 16px, 'icon-name': icon-slider-16x16, 'icon-size': 16px)
);
```

```html
<div class="slider" data-slider data-initial-start="50" data-end="200">
  <span class="slider-handle"  data-slider-handle role="slider" tabindex="1"></span>
  <span class="slider-fill" data-slider-fill></span>
  <input type="hidden">
</div>

<div class="slider" data-slider data-initial-start="25" data-initial-end="75">
  <span class="slider-handle" data-slider-handle role="slider" tabindex="1"></span>
  <span class="slider-fill" data-slider-fill></span>
  <span class="slider-handle" data-slider-handle role="slider" tabindex="1"></span>
  <input type="hidden">
  <input type="hidden">
</div>

<div class="slider" data-slider data-initial-start="50">
  <span class="slider-handle"  data-slider-handle role="slider" tabindex="1" aria-controls="sliderOutput1"></span>
  <span class="slider-fill" data-slider-fill></span>
</div>
<input type="number" id="sliderOutput1">

<div class="slider vertical" data-slider data-initial-start="25" data-end="200" data-vertical="true">
  <span class="slider-handle" data-slider-handle role="slider" tabindex="1"></span>
  <span class="slider-fill" data-slider-fill></span>
  <input type="hidden">
</div>
```
<div class="grid-x grid-margin-x">
  <div class="cell small-12 large-6 input-wrapper">
    <div class="slider" data-slider data-initial-start="50" data-end="200">
      <span class="slider-handle"  data-slider-handle role="slider" tabindex="1"></span>
      <span class="slider-fill" data-slider-fill></span>
      <input type="hidden">
    </div>
  </div>
  <div class="cell small-12 large-6 input-wrapper">
    <div class="slider" data-slider data-initial-start="25" data-initial-end="75">
      <span class="slider-handle" data-slider-handle role="slider" tabindex="1"></span>
      <span class="slider-fill" data-slider-fill></span>
      <span class="slider-handle" data-slider-handle role="slider" tabindex="1"></span>
      <input type="hidden">
      <input type="hidden">
    </div>
  </div>
</div>
<div class="grid-x grid-margin-x">
  <div class="cell small-10 input-wrapper">
    <div class="slider" data-slider data-initial-start="50">
      <span class="slider-handle"  data-slider-handle role="slider" tabindex="1" aria-controls="sliderOutput1"></span>
      <span class="slider-fill" data-slider-fill></span>
    </div>
  </div>
  <div class="cell small-2 input-wrapper">
    <input type="number" id="sliderOutput1">
  </div>
</div>
<div class="grid-x grid-margin-x">
  <div class="cell small-12 input-wrapper">
    <div class="slider vertical" data-slider data-initial-start="25" data-end="200" data-vertical="true">
      <span class="slider-handle" data-slider-handle role="slider" tabindex="1"></span>
      <span class="slider-fill" data-slider-fill></span>
      <input type="hidden">
    </div>
  </div>
</div>



# Tabs

<div class="grid-x grid-margin-x">
  <div class="cell small-12 input-wrapper">
    <ul class="tabs" data-tabs id="example-tabs">
      <li class="tabs-title is-active"><a href="#panel1" aria-selected="true">Tab 1</a></li>
      <li class="tabs-title"><a data-tabs-target="panel2" href="#panel2">Tab 2</a></li>
    </ul>
    <div class="tabs-content" data-tabs-content="example-tabs">
      <div class="tabs-panel is-active" id="panel1">
        <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
        <p><a href="#">It's dangerous to go alone, take this.</a></p>
      </div>
      <div class="tabs-panel" id="panel2">
        <p>Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
      </div>
    </div>
  </div>
</div>



# The Grid

<p class="lead">Problem: You've got tons of content, each needing different sized cells, and don't know how to quick and easily get it all done. Solution: The awesome XY grid!</p>

---

## Overview

The grid is built around two key elements: grid-x and cells. grid-container create a max-width and contain the grid, and cells create the final structure. Everything on your page that you don't give a specific structural style to should be within a grid-x or cell.

---

## Nesting

In the Grid you can nest cells down as far as you'd like. Just embed grid-x inside cells and go from there. Each embedded grid-x can contain up to 12 cells.

---

## How to Use

Using this framework is easy. Here's how your code will look when you use a series of `<div>` tags to create cells.

```html
<div class="grid-x">
  <div class="small-6 medium-4 large-3 cell">...</div>
  <div class="small-6 medium-8 large-9 cell">...</div>
</div>
```

<div class="grid-x display">
  <div class="small-12 large-4 cell">4</div>
  <div class="small-12 large-4 cell">4</div>
  <div class="small-12 large-4 cell">4</div>
</div>
<div class="grid-x display">
  <div class="small-12 large-3 cell">3</div>
  <div class="small-12 large-6 cell">6</div>
  <div class="small-12 large-3 cell">3</div>
</div>
<div class="grid-x display">
  <div class="small-12 large-2 cell">2</div>
  <div class="small-12 large-8 cell">8</div>
  <div class="small-12 large-2 cell">2</div>
</div>
<div class="grid-x display">
  <div class="small-12 large-3 cell">3</div>
  <div class="small-12 large-9 cell">9</div>
</div>
<div class="grid-x display">
  <div class="small-12 large-4 cell">4</div>
  <div class="small-12 large-8 cell">8</div>
</div>
<div class="grid-x display">
  <div class="small-12 large-5 cell">5</div>
  <div class="small-12 large-7 cell">7</div>
</div>
<div class="grid-x display">
  <div class="small-12 large-6 cell">6</div>
  <div class="small-12 large-6 cell">6</div>
</div>

---

## Nesting grid-x

In the Grid you can nest cells down as far as you'd like. Just embed grid-x inside cells and go from there. Each embedded grid-x can contain up to 12 cells.

```html
<div class="grid-x">
  <div class="small-8 cell">8
    <div class="grid-x">
      <div class="small-8 cell">8 Nested
        <div class="grid-x">
          <div class="small-8 cell">8 Nested Again</div>
          <div class="small-4 cell">4</div>
        </div>
      </div>
      <div class="small-4 cell">4</div>
    </div>
  </div>
  <div class="small-4 cell">4</div>
</div>
```

<div class="grid-x display">
  <div class="small-8 cell">8
    <div class="grid-x">
      <div class="small-8 cell">8 Nested
        <div class="grid-x">
          <div class="small-8 cell">8 Nested Again</div>
          <div class="small-4 cell">4</div>
        </div>
      </div>
      <div class="small-4 cell">4</div>
    </div>
  </div>
  <div class="small-4 cellgi">4</div>
</div>

---

## Small Grid

As you've probably noticed in the examples above, you have access to a small, medium, and large grid. If you know that your grid structure will be the same for small devices as it will be on large devices, just use the small grid. You can override your small grid classes by adding medium or large grid classes.

```html
<div class="grid-x">
  <div class="small-2 cell">2</div>
  <div class="small-10 cell">10, last</div>
</div>
<div class="grid-x">
  <div class="small-3 cell">3</div>
  <div class="small-9 cell">9, last</div>
</div>
```

<div class="grid-x display">
  <div class="small-2 cell">2</div>
  <div class="small-10 cell">10, last</div>
</div>
<div class="grid-x display">
  <div class="small-3 cell">3</div>
  <div class="small-9 cell">9, last</div>
</div>



# Colors

<p class="lead">Below you can find the different values we created that support the primary color variable you can change at any time in <code>\_settings.scss</code></p>

---

```scss
$foundation-palette: (
  primary: #2962FF,
  secondary: #6200EA,
  success: #00C853,
  warning: #FFAE00,
  alert: #f44336,
);
$black: #141414;
$white: #ffffff;
```

<div class="grid-x grid-margin-x up-2 medium-up-3 large-up-6">
  <div class="cell">
    <div class="color-block">
      <span style="background: #2962FF"></span>
      #2962FF
    </div>
  </div>
  <div class="cell">
    <div class="color-block">
      <span style="background: #6200EA"></span>
      #6200EA
    </div>
  </div>
  <div class="cell">
    <div class="color-block">
      <span style="background: #00C853"></span>
      #00C853
    </div>
  </div>
  <div class="cell">
    <div class="color-block">
      <span style="background: #FFAE00"></span>
      #FFAE00
    </div>
  </div>
  <div class="cell">
    <div class="color-block">
      <span style="background: #f44336"></span>
      #f44336
    </div>
  </div>
  <div class="cell">
      <div class="color-block">
        <span style="background: #141414"></span>
        #141414
      </div>
    </div>
</div>


