<template>
  <div class="forms">
    <h1>{{ msg }}</h1>
    <div class="row">
      <div class="col-6">
        <h4>Form controls</h4>
        <div class="">
          <button v-bind:disabled="isButtonDisabled">Button Disabled</button>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Example select</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option v-for="option in options" v-bind:value="option.value">{{ option.name }}</option>
          </select>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input v-model="forms.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            <small v-html="forms.email" class="form-text text-muted"></small>
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <div class="form-group">
            <label for="exampleFormControlFile1">Example file input</label>
            <input type="file" class="form-control-file" id="exampleFormControlFile1">
            <input
              type="checkbox"
              v-model="forms.toggle"
              true-value="true"
              false-value="false"
            >
            <div v-bind:class="{ active: isActive, 'text-danger': hasError }">Checked</div>
          </div>
        </div>

        <h4>Sizing</h4>
        <div class="form-group">
          <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg">
          <input class="form-control" type="text" placeholder="Default input">
          <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm">
        </div>

        <h4>Readonly plain text</h4>
        <div class="form-group row">
          <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword" placeholder="Password">
          </div>
        </div>

        <h4>Default (stacked)</h4>
        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
            <label class="form-check-label" for="defaultCheck1">
              Default checkbox
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
            <label class="form-check-label" for="exampleRadios1">
              Default radio
            </label>
          </div>
        </div>

        <h4>Inline</h4>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
          <label class="form-check-label" for="inlineCheckbox1">1</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
          <label class="form-check-label" for="inlineCheckbox2">2</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
          <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
        </div>

        <h4>Form grid</h4>
        <div class="row form-group">
          <div class="col-12">{{ fullName }}</div>
          <div class="col">
            <input v-model="firstName" type="text" class="form-control" placeholder="First name">
          </div>
          <div class="col">
            <input v-model="lastName" type="text" class="form-control" placeholder="Last name">
          </div>
        </div>

        <h4>Help text</h4>
        <form class="form-inline">
          <div class="form-group">
            <label for="inputPassword6">Password</label>
            <input type="password" id="inputPassword6" class="form-control mx-sm-3" aria-describedby="passwordHelpInline">
            <small id="passwordHelpInline" class="text-muted">
              Must be 8-20 characters long.
            </small>
          </div>
        </form>

      </div>
      <div class="col-6">
        <div class="mb-3">
          <h4>Examples</h4>
          <button type="button" class="btn btn-primary">Primary</button>
          <button type="button" class="btn btn-secondary">Secondary</button>
          <button type="button" class="btn btn-success">Success</button>
          <button type="button" class="btn btn-danger">Danger</button>
          <button type="button" class="btn btn-warning">Warning</button>
          <button type="button" class="btn btn-info">Info</button>
          <button type="button" class="btn btn-light">Light</button>
          <button type="button" class="btn btn-dark">Dark</button>
          <button type="button" class="btn btn-link">Link</button>
        </div>
        <div class="mb-3">
          <button type="button" class="btn btn-outline-primary">Primary</button>
          <button type="button" class="btn btn-primary btn-sm">Small button</button>
          <button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
        </div>
        <div class="mb-3">
          <h4>Button tags</h4>
          <a class="btn btn-primary" href="#" role="button">Link</a>
          <button class="btn btn-primary" type="submit">Button</button>
          <input class="btn btn-primary" type="button" value="Input">
          <input class="btn btn-primary" type="submit" value="Submit">
          <input class="btn btn-primary" type="reset" value="Reset">
          <h1 v-show="ok">Hello!</h1>

        </div>
        <div class="mb-3">
          <div class="btn-group mr-2" role="group" aria-label="First group">
            <button type="button" class="btn btn-secondary">1</button>
            <button type="button" class="btn btn-secondary">2</button>
            <button type="button" class="btn btn-secondary">3</button>
            <button type="button" class="btn btn-secondary">4</button>
          </div>
        </div>
        <div class="mb-3">
          <!-- Button trigger modal -->
          <button v-on:click="showModal" type="button" class="btn btn-primary">
            Launch demo modal
          </button>

          <!-- Modal -->
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-md-4">.col-md-4</div>
                      <div class="col-md-4 ml-auto">.col-md-4 .ml-auto</div>
                    </div>
                    <div class="row">
                      <div class="col-md-3 ml-auto">.col-md-3 .ml-auto</div>
                      <div class="col-md-2 ml-auto">.col-md-2 .ml-auto</div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 ml-auto">.col-md-6 .ml-auto</div>
                    </div>
                    <div class="row">
                      <div class="col-sm-9">
                        Level 1: .col-sm-9
                        <div class="row">
                          <div class="col-8 col-sm-6">
                            Level 2: .col-8 .col-sm-6
                          </div>
                          <div class="col-4 col-sm-6">
                            Level 2: .col-4 .col-sm-6
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'forms',
  data() {
    return {
      msg: "Form Component & Bootstrap 4",
      options: [
        { name: 'One', value: '1' },
        { name: 'Two', value: '2' },
        { name: 'Three', value: '3' }
      ],
      isButtonDisabled: true,
      forms: {},
      firstName: 'Foo',
      lastName: 'Bar',
      fullName: 'Foo Bar',
      isActive: true,
      hasError: false,
    }
  },
  components: {

  },
  methods: {
    showModal() {

    },
  },
  computed: {
    // a computed getter
    checkBox() {
      this.forms.toggle;
    },
  },
  watch: {
    firstName(val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName(val) {
      this.fullName = this.firstName + ' ' + val
    },
    forms() {
      console.log(this.forms.toggle);
    },
  }
}
</script>
