class Services {
  constructor() {
    this.http = "http://";
    this.localhost = "localhost:3000/";
    this.endpoint = "users/";
    this.url = `${this.http}${this.localhost}${this.endpoint}`;
  }

  async getData() {
    try {
      const respons = await fetch(this.url);

      if (respons.ok) {
        const data = await respons.json();
        return data;
      } else {
        console.error("Failed to get data.");
      }
    } catch (error) {
      console.error(error);
    }
  }

  async postData(newData) {
    try {
      const fetchOptions = {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      };
      const respons = await fetch(this.url, fetchOptions);

      if (respons.ok) {
        const data = await respons.json();
        return data;
      } else {
        console.error("Failed to post data.");
      }
    } catch (error) {
      console.error(error);
    }
  }

  async deleteData(id) {
    try {
      const fetchOptions = {
        mode: "cors",
        method: "DELETE",
      };
      const respons = await fetch(`${this.url}${id}`, fetchOptions);

      if (respons.ok) {
        const data = await respons.json();
        return data;
      } else {
        console.error("Failed to delete data.");
      }
    } catch (error) {
      console.error(error);
    }
  }

  async updateData(updatedData, id) {
    try {
      const fetchOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      };
      const respons = await fetch(`${this.url}${id}`, fetchOptions);

      if (respons.ok) {
        const data = await respons.json();
        return data;
      } else {
        console.error("Failed to update data.");
      }
    } catch (error) {
      console.error(error);
    }
  }
}

let services = new Services();
export default services;
