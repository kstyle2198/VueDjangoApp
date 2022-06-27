<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app clipped-left color="indigo" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>VueDjangoAPP</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn text href="/">Home</v-btn>
      <v-btn text href="/blog/post/list/">Blog</v-btn>
      <v-btn text href="/admin/">Admin</v-btn>
      <v-btn text>/</v-btn>

      <v-btn text href="post_list.html">PostList</v-btn>
      <v-btn text href="post_detail.html">PostDetail</v-btn>
      <v-spacer></v-spacer>

      <v-menu offset-y left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            <v-icon>mdi-account</v-icon>
            Anonymous
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="dialog.login = true">
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>
          <v-list-item @click="dialog.register = true">
            <v-list-item-title>Register</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
          <v-list-item @click="dialog.pwdchg = true">
            <v-list-item-title>Change Password</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- login dialog -->
    <v-dialog v-model="dialog.login" max-width="450">
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Login form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Username"
              name="username"
              prepend-icon="mdi-account"
              type="text"
            ></v-text-field>
            <v-text-field
              label="Password"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="dialog.login = false">Cancel</v-btn>
          <v-btn color="primary" class="mr-5" @click="dialog = false">
            Login
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- register dialog -->
    <v-dialog v-model="dialog.register" max-width="450">
      <v-card class="elevation-12">
        <v-toolbar color="success" dark flat>
          <v-toolbar-title>Register form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Username"
              name="username"
              prepend-icon="mdi-account"
              type="text"
            ></v-text-field>
            <v-text-field
              label="Password"
              name="password1"
              prepend-icon="mdi-lock"
              type="password"
            ></v-text-field>
            <v-text-field
              label="Password again"
              name="password2"
              prepend-icon="mdi-lock"
              type="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="dialog.register = false">
            Cancel
          </v-btn>
          <v-btn color="success" class="mr-5" @click="dialog.register = false">
            Register
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- pwdchg dialog -->
    <v-dialog v-model="dialog.pwdchg" max-width="450">
      <v-card class="elevation-12">
        <v-toolbar color="warning" dark flat>
          <v-toolbar-title>Password change form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Old Password"
              name="old_password"
              prepend-icon="mdi-lock"
              type="password"
            ></v-text-field>
            <v-text-field
              label="New Password"
              name="new_password1"
              prepend-icon="mdi-lock"
              type="password"
            ></v-text-field>
            <v-text-field
              label="New Password again"
              name="new_password2"
              prepend-icon="mdi-lock"
              type="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="dialog.pwdchg = false">Cancel</v-btn>
          <v-btn color="warning" class="mr-5" @click="dialog.pwdchg = false">
            Password change
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    dialog: {
      login: false,
      register: false,
      pwdchg: false,
    },
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard' },
      { title: 'Photos111', icon: 'mdi-image' },
      { title: 'About1111', icon: 'mdi-help-box' },
    ],
  }),
}
</script>

<style></style>
