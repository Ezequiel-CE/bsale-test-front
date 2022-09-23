import { mainApp } from ".";

export const setLoading = () => {
  mainApp.innerHTML = ` <div class="d-flex justify-content-center align-items-center h-100">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>`;
};
