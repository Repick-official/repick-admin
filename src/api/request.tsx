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
  type: string = "latest" // 기본값으로 "latest" 설정,
) => {
  try {
    // URL에 동적으로 파라미터 추가
    let url = `${process.env.API_URL}/product/count?type=${type}&page=${page}&size=${size}`;

    const response = await fetch(url, {
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
  size: string,
  type: string = "latest", // 기본값으로 "latest" 설정
  startDate?: string,
  endDate?: string
) => {
  try {
    // URL에 동적으로 파라미터 추가
    let url = `${process.env.API_URL}/clothing-sales/status?page=${page}&size=${size}&type=${type}`;

    if (startDate) {
      url += `&startDate=${encodeURIComponent(startDate)}`;
    }

    if (endDate) {
      url += `&endDate=${encodeURIComponent(endDate)}`;
    }

    const response = await fetch(url, {
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
export const updateProductReturn = async (
  returnState: string,
  productIds: number
) => {
  try {
    const response = await fetch(process.env.API_URL + `/product/return`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        returnState: returnState,
        productIds: [productIds],
      }),
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
