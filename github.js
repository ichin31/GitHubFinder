class GitHub{
  constructor(){
    this.client_id = '4ff1c7eb07acee11735e';
    this.client_secert = '0183849f01fe5b7d13275e1d59d779b26ca439bf';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }
  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secert=${this.client_secert}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secert=${this.client_secert}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return{
      profile,
      repos
    }
  }
}