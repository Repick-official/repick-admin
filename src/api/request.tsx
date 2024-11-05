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
  page: string,
  size: string,
  userId?: number
) => {
  try {
    const url = new URL(process.env.API_URL + "/product/count");
    if (userId !== undefined) {
      url.searchParams.append("userId", userId.toString());
    }
    url.searchParams.append("page", page);
    url.searchParams.append("size", size);

    const response = await fetch(url.toString(), {
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

export const getUserInfo = async (clothingSalesId: number) => {
  try {
    const response = await fetch(
      process.env.API_URL + `/clothing-sales/${clothingSalesId}`,
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
export const updateClothingSalesStatus = async (
  clothingSalesId: number,
  clothingSalesState: string
) => {
  try {
    const response = await fetch(
      process.env.API_URL + `/clothing-sales/status`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clothingSalesId: clothingSalesId,
          clothingSalesState: clothingSalesState,
        }),
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
export const getPresignedUrl = async (filename: string, fileType: string) => {
  console.log(process.env.API_TOKEN);
  try {
    const response = await fetch(
      process.env.API_URL +
        `/admin/presignedUrl?filename=${filename}&fileType=${fileType}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.API_TOKEN}`,
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
export const getUserStatistics = async () => {
  try {
    const response = await fetch(process.env.API_URL + `/user/statistics`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_TOKEN}`,
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
