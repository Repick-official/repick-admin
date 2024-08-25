export const getRequestPurchase = async (page: string, size: string) => {
  try {
    const response = await fetch(
      process.env.API_URL + `/order/status?page=${page}&size=${size}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Error fetching poll types");
    }
  } catch (error) {
    throw error;
  }
};

export const registerTrackingNumber = async (
  productOrderId: string,
  newTrackingNumber: string
) => {
  try {
    const response = await fetch(
      process.env.API_URL + `/order/${productOrderId}/tracking-number`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ trackingNumber: newTrackingNumber }),
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Error fetching poll types");
    }
  } catch (error) {
    throw error;
  }
};

export const getRequestReturn = async (page: string, size: string) => {
  try {
    const response = await fetch(
      process.env.API_URL + `/order/return-status?page=${page}&size=${size}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Error fetching poll types");
    }
  } catch (error) {
    throw error;
  }
};

export const updateOrderState = async (
  productOrderId: string,
  newState: string
) => {
  try {
    const response = await fetch(
      process.env.API_URL + `/order/${productOrderId}/state`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ state: newState }),
      }
    );
    if (response.ok) {
      console.log("ok");
      const data = await response.json();
      return data;
    } else {
      throw new Error("Error fetching poll types");
    }
  } catch (error) {
    throw error;
  }
};

export const getClothingSales = async (
  userId: number,
  page: string,
  size: string
) => {
  try {
    const response = await fetch(
      process.env.API_URL +
        `/product/count?userId=${userId}&page=${page}&size=${size}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Error fetching poll types");
    }
  } catch (error) {
    throw error;
  }
};

export const getClothingSalesDetails = async (
  clothingSalesId: number,
  productState: string,
  page: string,
  size: string
) => {
  try {
    const response = await fetch(
      process.env.API_URL +
        `/product/${clothingSalesId}/${productState}?page=${page}&size=${size}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Error fetching poll types");
    }
  } catch (error) {
    throw error;
  }
};
export const getClothingSalesStatus = async (
  page: string,
  size: string
  // startDate: string,
  // endDate: string
) => {
  try {
    const response = await fetch(
      process.env.API_URL + `/clothing-sales/status?page=${page}&size=${size}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Error fetching poll types");
    }
  } catch (error) {
    throw error;
  }
};
export const getDashboardToday = async () => {
  try {
    const response = await fetch(
      process.env.API_URL + `/clothing-sales/today`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Error fetching poll types");
    }
  } catch (error) {
    throw error;
  }
};
export const getDashboardClothing = async () => {
  try {
    const response = await fetch(
      process.env.API_URL + `/clothing-sales/count`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Error fetching poll types");
    }
  } catch (error) {
    throw error;
  }
};
export const getDashboardOrder = async () => {
  try {
    const response = await fetch(process.env.API_URL + `/order/count`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Error fetching poll types");
    }
  } catch (error) {
    throw error;
  }
};
